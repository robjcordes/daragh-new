<div <?php print $attributes;?> class="<?php print $classes;?>">
  <?php if($section == 'frontend') :?>
    <div class="tb-megamenu-button navbar-toggle .navbar-collapse .pull-right " data-toggle="collapse" data-target=".nav-collapse"  > <span>Menu</span>
      <button type="button" > <i class="fa fa-bars"></i></button>
    </div>    
    <div class="nav-collapse collapse<?php print $block_config['always-show-submenu'] ? ' always-show' : '';?>">
  <?php endif;?>
  <?php print $content;?>
  <?php if($section == 'frontend') :?>
    </div>
  <?php endif;?>
</div>
