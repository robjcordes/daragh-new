<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php foreach ($rows as $id => $row): ?>
	<?php if ($id == 0): ?>
		<div class="box1">
	<?php elseif ($id == 3): ?>
		<div class="box3">
	<?php else: ?>
		<div class="box2">
	<?php endif; ?>
	  <div<?php if ($classes_array[$id]) { print ' class="' . $classes_array[$id] .'"';  } ?>>
	    <?php print $row; ?>
	  </div>
  </div>
<?php endforeach; ?>