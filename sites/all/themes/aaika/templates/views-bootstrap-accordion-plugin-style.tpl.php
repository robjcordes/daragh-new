<div id="views-bootstrap-accordion-<?php print $id ?>" class="<?php print $classes ?>">
  <?php foreach ($rows as $key => $row): ?>
    <?php 
      $header_class = 'collapsed';
      $body_class = 'collapse';
      if ($key == 0) {
        $header_class = '';
        $body_class = 'in';
      }
    ?>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a class="accordion-toggle <?php print $header_class; ?>"
             data-toggle="collapse"
             data-parent="#views-bootstrap-accordion-<?php print $id ?>"
             href="#collapse<?php print $key ?>">
            <?php print $titles[$key] ?>
            <span class="st-arrow">Open or Close</span>
          </a>
        </h4>
      </div>

      <div id="collapse<?php print $key ?>" class="panel-collapse <?php print $body_class; ?>">
        <div class="panel-body">
          <?php print $row ?>
        </div>
      </div>
    </div>
  <?php endforeach ?>
</div>
