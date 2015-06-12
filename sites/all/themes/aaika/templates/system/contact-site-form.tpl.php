<?php        

    $theme_path = drupal_get_path('theme', 'aaika');
    drupal_add_js('http://maps.google.com/maps/api/js?sensor=false', array('type' => 'external'));
    drupal_add_css($theme_path . '/css/contact.css');   
    hide($form['copy']);    
    $form['message']['#resizable'] = FALSE;
    $form['name']['#attributes']['placeholder'] = $form['name']['#title'];
    unset($form['name']['#title']);
    $form['mail']['#attributes']['placeholder'] = $form['mail']['#title'];
    unset($form['mail']['#title']);
    $form['subject']['#attributes']['placeholder'] = $form['subject']['#title'];
    unset($form['subject']['#title']);
    $form['message']['#attributes']['placeholder'] = $form['message']['#title'];
    unset($form['message']['#title']);
?>
<header><?php print t('Send Us a '); ?><strong><?php print t('Message!'); ?></strong></header>
<fieldset>
<div class="row">
  <section class="col col-6">
    <?php print render($form['name']); ?>  
  </section>
  <section class="col col-6">
    <?php print render($form['mail']); ?>   
  </section>
</div>
<section>
  <?php print render($form['subject']); ?>
</section>
<section>
  <?php print render($form['message']); ?> 
</section>
<section>
  <?php print render($form['copy']); ?> 
</section>
</fieldset>
<footer>
    <?php print render($form['actions']); ?>    
</footer>
<?php print drupal_render_children($form); ?>