<?php

// Put the logo path into JavaScript for the live preview.
drupal_add_js(array('color' => array('logo' => theme_get_setting('logo', 'aaika'))), 'setting');

$info = array(
  // Available colors and color labels used in theme.
  'fields' => array(
    'base' => t('Main'),   
    'text' => t('Text'),
    'link' => t('Header Title'),    
    'menu45' => t('BG for Header Style 4&5'),
  ),
  // Pre-defined color schemes.
  'schemes' => array(
    'default' => array(
      'title' => t('Default'),
      'colors' => array(
        'base' => '#e54c4c',  
        'text' => '#727272',      
        'link' => '#333333',
        'menu45' => '#c54242',
      ),
    ),
    'blue' => array(
      'title' => t('Blue'),
      'colors' => array(
        'base' => '#3183d7',        
        'text' => '#727272',
        'link' => '#333333',
        'menu45' => '#2069b4',   
      ),
    ),
    'bridge' => array(
      'title' => t('Bridge'),
      'colors' => array(
        'base' => '#a5d549',    
        'text' => '#727272',    
        'link' => '#333333',    
        'menu45' => '#89b732',       
      ),
    ),
    'cyan' => array(
      'title' => t('Cyan'),
      'colors' => array(
        'base' => '#35d3b7',  
        'text' => '#727272',      
        'link' => '#333333', 
        'menu45' => '#25bba0',   
      ),
    ),
    'darkred' => array(
      'title' => t('Dark Red'),
      'colors' => array(
        'base' => '#970001',        
        'text' => '#727272',
        'link' => '#333333', 
        'menu45' => '#780001',   
      ),
    ),
    'green' => array(
      'title' => t('Green'),
      'colors' => array(
        'base' => '#3fc35f',     
        'text' => '#727272',   
        'link' => '#333333', 
        'menu45' => '#2ba84a',   
      ),
    ),
    'lightblue' => array(
      'title' => t('Light Blue'),
      'colors' => array(
        'base' => '#37c6f5',    
        'text' => '#727272',    
        'link' => '#333333', 
        'menu45' => '#26b1de',   
      ),
    ),
    'orange' => array(
      'title' => t('Orange'),
      'colors' => array(
        'base' => '#ff6e41',    
        'text' => '#727272',    
        'link' => '#333333', 
        'menu45' => '#e35529',   
      ),
    ),
    'pink' => array(
      'title' => t('Pink'),
      'colors' => array(
        'base' => '#fa3aab',  
        'text' => '#727272',      
        'link' => '#333333', 
        'menu45' => '#db208e',   
      ),
    ),
    'purple' => array(
      'title' => t('Purple'),
      'colors' => array(
        'base' => '#c762cb',     
        'text' => '#727272',   
        'link' => '#333333', 
        'menu45' => '#a641aa',   
      ),
    ),
    'slate' => array(
      'title' => t('Slate'),
      'colors' => array(
        'base' => '#6b798f',        
        'text' => '#727272',
        'link' => '#333333', 
        'menu45' => '#516077',   
      ),
    ),
    'yellow' => array(
      'title' => t('Yellow'),
      'colors' => array(
        'base' => '#f2d438',        
        'text' => '#727272',
        'link' => '#333333', 
        'menu45' => '#dfc126',   
      ),
    ),
  ),

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => array(
    'css/colors.css',
  ),

  // Files to copy.
  'copy' => array(
    'logo.png',
  ),

  // Gradient definitions.
  'gradients' => array(
    array(
      // (x, y, width, height).
      'dimension' => array(0, 0, 0, 0),
      // Direction of gradient ('vertical' or 'horizontal').
      'direction' => 'vertical',
      // Keys of colors to use for the gradient.
      'colors' => array('top', 'bottom'),
    ),
  ),

  // Color areas to fill (x, y, width, height).
  'fill' => array(),

  // Coordinates of all the theme slices (x, y, width, height)
  // with their filename as used in the stylesheet.
  'slices' => array(),

  // Reference color used for blending. Matches the base.png's colors.
  'blend_target' => '#ffffff',

  // Preview files.
  'preview_css' => 'color/preview.css',
  'preview_js' => 'color/preview.js',
  'preview_html' => 'color/preview.html',

  // Base file for image generation.
  'base_image' => 'color/base.png',
);
