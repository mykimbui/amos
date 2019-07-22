<?php snippet('header') ?>

<div data-barba="wrapper">
<main class="wrap_single_project" data-barba="container" data-barba-namespace="project">

  <div class="marquee marquee_top">
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
  </div>


  <div class="marquee marquee_left">
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
  </div>

  <div class="marquee marquee_right">
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
      <span><?= $page->title() ?></span>
  </div>


  <div class="single_project_images">

    <ul class=""<?= attr(['data-count' => $gallery->count()], ' ') ?>>
      <?php $count = 0; foreach ($gallery as $image): ?>

   
      <li  class="project_image_<?php echo $count  ?>">
          <?= $image ?>
      </li>
      <?php $count++; endforeach ?>
      <li class="next_project"> 

        <?php if($next = $page->next()): ?>

        <img class="blur" src="<?php echo $page->next()->cover()->url() ?>">
        <a class="to_next" href="<?= $next->url() ?>">
          Next Project<br>
          <?= $next->title() ?>
        </a>
        <?php else: ?>
          <img class="blur" src="<?= page('works')->children()->first()->cover()->url() ?>">
          <a class="to_next" href="<?= page('works')->children()->first()->url() ?>">
            Next Project<br>
            <?= page('works')->children()->first()->title() ?>
          </a>
        <?php endif ?>


      </li>
    </ul>

  </div>

</main>
</div>

<?php snippet('footer') ?>
