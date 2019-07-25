<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title> <?= $page->title() ?> – <?= $site->title() ?></title>


  <?= css(['assets/css/custom.css']) ?>

</head>
<body>

  <img class="grid" src="<?= $kirby->url('assets') ?>/media/grid.jpg">

  <div class="cursor"></div>

  <div class="page">


    <header class="header">
      <div class="nav_link nav_work">
        <span class="label">Works</span>
        <div class="works_menu">
          <ul>
            <?php $count = 0;  foreach (page('works')->children()->listed() as $album): ?>
              <li style="transition-delay: <?php echo (page('works')->children()->count() - $count) / 20 ?>s">
              <a class="works_menu_a" data-hover="<?= $album->hovercolor() ?>" data-index="<?php echo $count ?>" href="<?= $album->url() ?>">
                <span><?= $album->title() ?></span>
              </a>
              </li>
            <?php $count++; endforeach ?>

          </ul>
        </div>
      </div>
      <div class="mobile_menu_trigger"><img src="<?= $kirby->url('assets') ?>/media/icn_menu.svg"></div>
      <div class="nav_link nav_logo"><a class="logo" href="<?= $site->url() ?>">Amos <span class="middle_name">Abel</span> <span class="last_name"> Yong</span> </a></div>
      <div class="nav_link nav_about"><a class="nav_about_a" href="<?= $site->page('about')->url() ?>">About</a></div>
    </header>

<!-- 
    <div class="projects_showcase" <?= attr(['data-count' => page('works')->children()->count()], ' ') ?>>
      <ul>
      <?php $count = 0; foreach (page('works')->children()->listed() as $album): ?>
      <li class="project_image project_<?php echo $count ?>">
          <?php if ($cover = $album->cover()): ?>
          <?= $cover ?>
          <?php endif ?>
      </li>

      <?php $count++; endforeach ?>
      </ul>
    </div> -->
