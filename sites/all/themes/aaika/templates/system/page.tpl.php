<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
  $header_style = theme_get_setting('header_style');
  if ($header_style == 'menu-4.css' || $header_style == 'menu-5.css') {
    $navbar_classes = str_replace("container ", "", $navbar_classes);
    $navbar_classes = str_replace("navbar-default ", "", $navbar_classes);
  }
?>
<div class="wrapper-boxed">
  <div class="site_wrapper">
    <?php if (!empty($page['slider_wrapper1']) || !empty($page['slider_wrapper2']) || !empty($page['slider_wrapper3']) || !empty($page['slider_wrapper4'])): ?>
      <div id="sliderWrap">
        <div id="openCloseIdentifier"></div>
        <div id="slider">
          <div id="sliderContent">
            <div class="container">
              <div class="one_fourth">
                <?php if (!empty($page['slider_wrapper1'])): ?>
                  <?php print render($page['slider_wrapper1']); ?>
                <?php endif; ?>
              </div>
              <div class="one_fourth">
                <?php if (!empty($page['slider_wrapper2'])): ?>
                  <?php print render($page['slider_wrapper2']); ?>
                <?php endif; ?>
              </div>
              <div class="one_fourth">
                <?php if (!empty($page['slider_wrapper3'])): ?>
                  <?php print render($page['slider_wrapper3']); ?>
                <?php endif; ?>
              </div>
              <div class="one_fourth last">
                <?php if (!empty($page['slider_wrapper4'])): ?>
                  <?php print render($page['slider_wrapper4']); ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
        <div id="openCloseWrap"><a href="#" class="topMenuAction" id="topMenuImage"><img src="<?php print url(drupal_get_path('theme', 'aaika') . '/images/open.png'); ?>" alt="open" title="open" /></a></div>
      </div>  
    <?php endif; ?>
    <?php if ($header_style == 'menu-6.css'): ?>
      <div class="top_nav two">
        <div class="container">
          <div class="left">
            <?php if (!empty($page['top_left'])): ?>
              <?php print render($page['top_left']); ?>
            <?php endif; ?>
          </div>
          <div class="right">
            <?php if (!empty($page['top_right'])): ?>
              <?php print render($page['top_right']); ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <header id="header-style-1" role="banner" class="header <?php print $navbar_classes; ?>">
      <?php if ($header_style == 'menu-4.css' || $header_style == 'menu-5.css'): ?>
        <!-- Top header bar -->
        <div id="topHeader">        
          <div class="wrapper">               
            <div class="top_nav">
              <div class="container">
                <div class="left">
                  <?php if ($logo): ?>
                  <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
                    <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
                  </a>
                  <?php endif; ?>
                </div>
                <div class="right">
                  <?php if (!empty($page['top_right'])): ?>
                    <?php print render($page['top_right']); ?>
                  <?php endif; ?>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="trueHeader">
          <div class="wrapper">
            <!-- Navigation Menu -->
            <div class="container">
              <nav class="menu_main2">
                <div class="navbar yamm navbar-default">
                  <div id="navbar-collapse-1" class="navbar-collapse">
                    <?php if (!empty($primary_nav)): ?>
                      <?php print render($primary_nav); ?>
                    <?php endif; ?>
                    <?php if (!empty($secondary_nav)): ?>
                      <?php print render($secondary_nav); ?>
                    <?php endif; ?>
                    <?php if (!empty($page['navigation'])): ?>
                      <?php print render($page['navigation']); ?>
                    <?php endif; ?>
                  </div>
                </div>
              </nav>
              <div class="menu_right2">
                <?php if (!empty($page['menu_right2'])): ?>
                  <?php print render($page['menu_right2']); ?>
                <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
      <?php else: ?>
        <div class="container">
          <div class="logo">
            <?php if ($logo): ?>
            <a class="logo navbar-btn pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
              <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
            </a>
            <?php endif; ?>

            <?php if (!empty($site_name)): ?>
            <a class="name navbar-brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
            <?php endif; ?>        
            
          </div>

          <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
            <nav class="menu_main">
              <div class="navbar yamm navbar-default">
                <div class="container">                                 
                  <div id="navbar-collapse-1" class="navbar-collapse pull-right">
                    <?php if (!empty($primary_nav)): ?>
                      <?php print render($primary_nav); ?>
                    <?php endif; ?>
                    <?php if (!empty($secondary_nav)): ?>
                      <?php print render($secondary_nav); ?>
                    <?php endif; ?>
                    <?php if (!empty($page['navigation'])): ?>
                      <?php print render($page['navigation']); ?>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </nav>        
          <?php endif; ?>
          <?php if (!empty($page['menu_right'])): ?>
            <div class="menu_right">
              <?php print render($page['menu_right']); ?>
            </div>
          <?php endif; ?>
        </div>
      <?php endif; ?>    
    </header>
    <!-- Page Title -->
    <?php if (!empty($title) && !empty($breadcrumb)): ?>
    <div class="page_title2">
        <div class="container">
            
          <?php if (!empty($title)): ?>
            <h1><?php print $title; ?></h1>
          <?php endif; ?>
          <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
        </div>
    </div>
    <?php endif; ?>
    <!-- End Page Title -->
    <?php if (!empty($page['masterslider'])): ?>
      <div class="mstslider">

        <!-- masterslider -->
        <div class="master-slider ms-skin-default" id="masterslider">
          <?php print render($page['masterslider']); ?>
        </div>
      </div>
    <?php endif; ?>

    <div class="main-container container">

      <header role="banner" id="page-header">
        <?php if (!empty($site_slogan)): ?>
          <p class="lead"><?php print $site_slogan; ?></p>
        <?php endif; ?>

        <?php print render($page['header']); ?>
      </header> <!-- /#page-header -->

      <div class="row">

        <?php if (!empty($page['sidebar_first'])): ?>
          <aside class="col-sm-3" role="complementary">
            <?php print render($page['sidebar_first']); ?>
          </aside>  <!-- /#sidebar-first -->
        <?php endif; ?>

        <section<?php print $content_column_class; ?>>
          <?php if (!empty($page['highlighted'])): ?>
            <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
          <?php endif; ?>          
          <a id="main-content"></a>          
          <?php print render($title_suffix); ?>
          <?php print $messages; ?>
          <?php if (!empty($tabs)): ?>
            <?php print render($tabs); ?>
          <?php endif; ?>
          <?php if (!empty($page['help'])): ?>
            <?php print render($page['help']); ?>
          <?php endif; ?>
          <?php if (!empty($action_links)): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>
          <?php print render($page['content']); ?>
        </section>

        <?php if (!empty($page['sidebar_second'])): ?>
          <aside class="col-sm-3" role="complementary">
            <?php print render($page['sidebar_second']); ?>
          </aside>  <!-- /#sidebar-second -->
        <?php endif; ?>

      </div>
    </div>
    <footer class="footer">      
      <div class="container">
        <?php if (!empty($page['footer1'])): ?>
          <div class="one_fourth animate" data-anim-type="fadeInUp" data-anim-delay="300">
            <?php print render($page['footer1']); ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($page['footer2'])): ?>
          <div class="one_fourth animate" data-anim-type="fadeInUp" data-anim-delay="300">
            <?php print render($page['footer2']); ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($page['footer3'])): ?>
          <div class="one_fourth animate" data-anim-type="fadeInUp" data-anim-delay="300">
            <?php print render($page['footer3']); ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($page['footer4'])): ?>
          <div class="one_fourth last animate" data-anim-type="fadeInUp" data-anim-delay="300">
            <?php print render($page['footer4']); ?>
          </div>
        <?php endif; ?>
      </div>
      <?php if (!empty($page['copyright'])): ?>
        <div class="copyright_info">
          <div class="container">
            <?php print render($page['copyright']); ?>
          </div>
        </div>
      <?php endif; ?>
    </footer>
    <a href="#" class="scrollup">Scroll</a><!-- end scroll to top of the page-->
  </div>
</div>