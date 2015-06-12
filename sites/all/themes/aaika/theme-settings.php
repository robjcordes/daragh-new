<?php
/**
 * @file
 * theme-settings.php
 *
 * Provides theme settings for aaika themes when admin theme is not.
 *
 * 
 */

/**
 * Implements hook_form_FORM_ID_alter().
 */
function aaika_form_system_theme_settings_alter(&$form, $form_state, $form_id = NULL) {
  // Alter theme settings form.
  $form['aaika'] = array
    (
      '#type' => 'vertical_tabs',
      '#prefix' => '<h2><small>' . t('Aaika SETTINGS') . '</small></h2>',
      '#weight' => -8
    );
  $form['aaika_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('STYLE SWITCHER'),
    '#group' => 'aaika'
  );
  
  $form['aaika_settings']['page_style'] = array(
    '#type' =>'select', 
    '#title' => t('Page Style'),
    '#options' => array(
      'wide' => t('Wide'),
      'boxed' => t('boxed'),
     ),
    '#default_value' => theme_get_setting('page_style')?theme_get_setting('page_style'):'wide',
  );

  $form['aaika_settings']['header_style'] = array(
    '#type' =>'select', 
    '#title' => t('Header Style'),
    '#options' => array(
      'menu.css' => t('Header Style 1'),
      'menu-2.css' => t('Header Style 2'),
      'menu-3.css' => t('Header Style 3'),
      'menu-4.css' => t('Header Style 4'),
      'menu-5.css' => t('Header Style 5'),
      'menu-6.css' => t('Header Style 6'),                
     ),
    '#default_value' => theme_get_setting('header_style')?theme_get_setting('header_style'):'menu.css',
  );

  $form['aaika_settings']['bgpattern']= array(
    '#type' => 'fieldset',
    '#title' => t('Background pattern for boxed'),
    '#collapsible' => TRUE, 
    '#collapsed' => FALSE,  
    '#prefix' => '<div class="color-switcher" id="choose_color"> ',
    '#suffix' => '</div>'
  );
  $form['aaika_settings']['bgpattern']['bgstyle'] = array(
    '#type' => 'hidden',
    '#title' => t('Background Partern'),
    '#default_value' => theme_get_setting('bgstyle')?theme_get_setting('bgstyle'):'bg-patterns1',
    '#prefix' => '<div class="theme-patterns">
      <p>Choose BG Pattern</p>
      <ul>
        <li><a href="#" class="bg-patterns1" onClick="return bgpattern(this,\'bg-patterns1\');"></a></li>
        <li><a href="#" class="bg-patterns2" onClick="return bgpattern(this,\'bg-patterns2\');"></a></li>
        <li><a href="#" class="bg-patterns3" onClick="return bgpattern(this,\'bg-patterns3\');"></a></li>
        <li><a href="#" class="bg-patterns4" onClick="return bgpattern(this,\'bg-patterns4\');"></a></li>
        <li><a href="#" class="bg-patterns5" onClick="return bgpattern(this,\'bg-patterns5\');"></a></li>
        <li><a href="#" class="bg-patterns6" onClick="return bgpattern(this,\'bg-patterns6\');"></a></li>
        <li><a href="#" class="bg-patterns7" onClick="return bgpattern(this,\'bg-patterns7\');"></a></li>
        <li><a href="#" class="bg-patterns8" onClick="return bgpattern(this,\'bg-patterns8\');"></a></li>
        <li><a href="#" class="bg-patterns9" onClick="return bgpattern(this,\'bg-patterns9\');"></a></li>
        <li><a href="#" class="bg-patterns10" onClick="return bgpattern(this,\'bg-patterns10\');"></a></li>
        <li><a href="#" class="bg-patterns11" onClick="return bgpattern(this,\'bg-patterns11\');"></a></li>
        <li><a href="#" class="bg-patterns12" onClick="return bgpattern(this,\'bg-patterns12\');"></a></li>        
      </ul> ',
    '#suffix' => '</div>'
  );

  if($bgstyle = theme_get_setting('bgstyle')){
    drupal_add_js("jQuery(function() { 
      jQuery('.theme-patterns .".$bgstyle."').addClass('active-pattern'); 
    });"
    ,'inline');
  } else {
    drupal_add_js("jQuery(function() { 
      jQuery('.theme-patterns .bg-patterns1').addClass('active-pattern'); 
    });"
    ,'inline');
  }  

  drupal_add_js("
    function bgpattern(oBj, pattern){
      jQuery('input[name=\"bgstyle\"]').val(pattern);
      jQuery(oBj).parent().parent().find('a').removeClass('active-pattern');
      jQuery(oBj).addClass('active-pattern');
      return false;
    }"    
  ,'inline');

  $theme_path = drupal_get_path('theme', 'aaika');
  drupal_add_css($theme_path . '/css/admin-settings.css');

  return $form;
}
