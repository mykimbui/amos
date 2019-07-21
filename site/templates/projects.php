<?php snippet('header') ?>

<div data-barba="wrapper">
<main data-barba="container" data-barba-namespace="projects">

  <div class="marquee marquee_top">
    <?php $count = 0; foreach ($page->children()->listed() as $album): ?>
      <a class="project_link" data-hover="<?= $album->hovercolor() ?>" data-index="<?php echo $count ?>" href="<?= $album->url() ?>">
        <span><?= $album->title() ?></span>
      </a>
    <?php $count++; endforeach ?>
  </div>


  <div class="marquee marquee_left">
    <?php $count = 0; foreach ($page->children()->listed() as $album): ?>
      <a class="project_link" data-hover="<?= $album->hovercolor() ?>" data-index="<?php echo $count ?>" href="<?= $album->url() ?>">
        <span><?= $album->title() ?></span>
      </a>
    <?php $count++; endforeach ?>
  </div>

  <div class="marquee marquee_right">
    <?php $count = 0; foreach ($page->children()->listed() as $album): ?>
      <a class="project_link" data-hover="<?= $album->hovercolor() ?>" data-index="<?php echo $count ?>" href="<?= $album->url() ?>">
        <span><?= $album->title() ?></span>
      </a>
    <?php $count++; endforeach ?>
  </div>


  <div class="projects_showcase" <?= attr(['data-count' => $page->children()->count()], ' ') ?>>
    <ul>
    <?php $count = 0; foreach ($page->children()->listed() as $album): ?>
    <li class="project_image project_<?php echo $count ?>">
        <?php if ($cover = $album->cover()): ?>
        <?= $cover ?>
        <?php endif ?>
    </li>

    <?php $count++; endforeach ?>
    </ul>
  </div>


<!--   <ul class="albums"<?= attr(['data-even' => $page->children()->listed()->isEven()], ' ') ?>>
    <?php foreach ($page->children()->listed() as $album): ?>
    <li>
      <a href="<?= $album->url() ?>">
        <figure>
          <?php if ($cover = $album->cover()): ?>
          <?= $cover->crop(800, 1000) ?>
          <?php endif ?>
          <figcaption><?= $album->title() ?></figcaption>
        </figure>
      </a>
    </li>
    <?php endforeach ?>
  </ul> -->
</main>

</div>

<?php snippet('footer') ?>
