<?php

/**
 * @file
 * template.php
 */

/**
 * Override or insert variables into the page template for HTML output.
 */
function aaika_process_html(&$variables) {
  // Hook into color.module.
  if (module_exists('color')) {
    _color_html_alter($variables);
  }
}

/**
 * Override or insert variables into the page template.
 */
function aaika_process_page(&$variables) {  
  $theme_path = drupal_get_path('theme', 'aaika');

  // Hook into color.module.
  if (module_exists('color')) {
    _color_page_alter($variables);
  }

  $header_style = theme_get_setting('header_style');

  if ($header_style != '') {
    drupal_add_css($theme_path . '/js/mainmenu/' . $header_style, array('group' => CSS_THEME, 'weight' => 90));
  }
}

function aaika_js_alter(&$js) {
  $bootstrap_js_path = drupal_get_path('theme', 'bootstrap') . '/js/bootstrap.js';
  unset($js[$bootstrap_js_path]);     
  $isotope_js_path = drupal_get_path('module', 'views_isotope') . '/views_isotope.js';
  if (isset($js[$isotope_js_path])) {    
    unset($js[$isotope_js_path]);
    drupal_add_js(drupal_get_path('theme', 'aaika') . '/js/views_isotope.js');
  } 
}

function aaika_theme() {
  $aaika_path = drupal_get_path('theme', 'aaika') . '/templates/system';  
  return array(
    'contact_site_form' => array(
      'render element' => 'form',
      'template' => 'contact-site-form',
      'path' =>$aaika_path,
    ),    
  );
}

/**
 * Overrides theme_form_element().
 */
function aaika_form_element(&$variables) {
  $element = &$variables['element'];
  $is_checkbox = FALSE;
  $is_radio = FALSE;

  // This function is invoked as theme wrapper, but the rendered form element
  // may not necessarily have been processed by form_builder().
  $element += array(
    '#title_display' => 'before',
  );

  // Add element #id for #type 'item'.
  if (isset($element['#markup']) && !empty($element['#id'])) {
    $attributes['id'] = $element['#id'];
  }

  // Check for errors and set correct error class.
  if (isset($element['#parents']) && form_get_error($element)) {
    $attributes['class'][] = 'error';
  }

  if (!empty($element['#type'])) {
    $attributes['class'][] = 'form-type-' . strtr($element['#type'], '_', '-');
  }
  if (!empty($element['#name'])) {
    $attributes['class'][] = 'form-item-' . strtr($element['#name'], array(
        ' ' => '-',
        '_' => '-',
        '[' => '-',
        ']' => '',
      ));
  }
  // Add a class for disabled elements to facilitate cross-browser styling.
  if (!empty($element['#attributes']['disabled'])) {
    $attributes['class'][] = 'form-disabled';
  }
  if (!empty($element['#autocomplete_path']) && drupal_valid_path($element['#autocomplete_path'])) {
    $attributes['class'][] = 'form-autocomplete';
  }
  $attributes['class'][] = 'form-item';

  // See http://getbootstrap.com/css/#forms-controls.
  if (isset($element['#type'])) {
    if ($element['#type'] == "radio") {
      $attributes['class'][] = 'radio';
      $is_radio = TRUE;
    }
    elseif ($element['#type'] == "checkbox") {
      $attributes['class'][] = 'checkbox';
      $is_checkbox = TRUE;
    }
    else {
      $attributes['class'][] = 'form-group';
    }
  }

  $description = FALSE;
  $tooltip = FALSE;
  // Convert some descriptions to tooltips.
  // @see bootstrap_tooltip_descriptions setting in _bootstrap_settings_form()
  if (!empty($element['#description'])) {
    $description = $element['#description'];
    if (theme_get_setting('bootstrap_tooltip_enabled') && theme_get_setting('bootstrap_tooltip_descriptions') && $description === strip_tags($description) && strlen($description) <= 200) {
      $tooltip = TRUE;
      $attributes['data-toggle'] = 'tooltip';
      $attributes['title'] = $description;
    }
  }

  $output = '<div' . drupal_attributes($attributes) . '>' . "\n";

  // If #title is not set, we don't display any label or required marker.
  if (!isset($element['#title'])) {
    $element['#title_display'] = 'none';
  }

  $prefix = '';
  $suffix = '';
  if (isset($element['#field_prefix']) || isset($element['#field_suffix'])) {
    // Determine if "#input_group" was specified.
    if (!empty($element['#input_group'])) {
      $prefix .= '<div class="input-group">';
      $prefix .= isset($element['#field_prefix']) ? '<span class="input-group-addon">' . $element['#field_prefix'] . '</span>' : '';
      $suffix .= isset($element['#field_suffix']) ? '<span class="input-group-addon">' . $element['#field_suffix'] . '</span>' : '';
      $suffix .= '</div>';
    }
    else {
      $prefix .= isset($element['#field_prefix']) ? $element['#field_prefix'] : '';
      $suffix .= isset($element['#field_suffix']) ? $element['#field_suffix'] : '';
    }
  }

  switch ($element['#title_display']) {
    case 'before':
    case 'invisible':
      $output .= ' ' . theme('form_element_label', $variables);
      $output .= ' ' . $prefix . $element['#children'] . $suffix . "\n";
      break;

    case 'after':
      if ($is_radio || $is_checkbox) {
        $output .= ' ' . $prefix . $element['#children'] . $suffix;
      }
      else {
        $variables['#children'] = ' ' . $prefix . $element['#children'] . $suffix;
      }
      $output .= ' ' . theme('form_element_label', $variables) . "\n";
      break;

    case 'none':
    case 'attribute':
      // Output no label and no required marker, only the children.
      $output .= ' ' . $prefix . $element['#children'] . $suffix . "\n";
      break;
  }

  if ($description && !$tooltip) {
    $output .= '<div class="help-block">' . $element['#description'] . "</div>\n";
  }

  $output .= "</div>\n";

  return $output;
}

function aaika_fivestar_static($variables) {
  $rating  = $variables['rating'];
  $stars = $variables['stars'];
  $tag = $variables['tag'];
  $widget = $variables['widget'];
  if ($widget['name'] != 'default') {
    $path = drupal_get_path('module', 'fivestar');
    drupal_add_css($path . '/css/fivestar.css');
    drupal_add_css($widget['css']);
  }

  $output = '<div class="fivestar-' . $widget['name'] . '">';
  $output .= '<div class="fivestar-widget-static fivestar-widget-static-' . $tag . ' fivestar-widget-static-' . $stars . ' clearfix">';
  if (empty($stars)) {
    $stars = 5;
  }
  $numeric_rating = $rating/(100/$stars);
  for ($n=1; $n <= $numeric_rating; $n++) {    
    $output .= '<i class="fa fa-star"></i> ';
  }
  $output .= '</div></div>';
  return $output;
}