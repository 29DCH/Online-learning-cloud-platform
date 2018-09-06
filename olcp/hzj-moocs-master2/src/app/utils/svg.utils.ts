import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

export const loadSvgResource = (iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) => {
  const imgUrl = 'assets/img/svg';
  const sidebar = `${imgUrl}/sidebar`;
  const dayUrl = `${imgUrl}/days`;
  const avatarUrl = `${imgUrl}/avatar`;
  const iconDir = `${imgUrl}/icons`;
  iconRegistry.addSvgIconSetInNamespace('avatars', sanitizer.bypassSecurityTrustResourceUrl(`${avatarUrl}/avatars.svg`));
  iconRegistry.addSvgIcon('unassigned', sanitizer.bypassSecurityTrustResourceUrl(`${avatarUrl}/unassigned.svg`));
  iconRegistry.addSvgIcon('day', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/day.svg`));
  iconRegistry.addSvgIcon('month', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/month.svg`));
  iconRegistry.addSvgIcon('project', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/project.svg`));
  iconRegistry.addSvgIcon('projects', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/projects.svg`));
  iconRegistry.addSvgIcon('week', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/week.svg`));
  iconRegistry.addSvgIcon('gifts', sanitizer.bypassSecurityTrustResourceUrl(`${sidebar}/day.svg`));
  //移除图标
  iconRegistry.addSvgIcon( 'move', sanitizer.bypassSecurityTrustResourceUrl( `${iconDir}/move.svg`));
  //搜索图标
  iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-search-24px.svg`));
  //星星图标(实心)
  iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-star-24px.svg`));
  //星星图标(空心)
  iconRegistry.addSvgIcon('star-border', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-star_border-24px.svg`));
  //用户图标,作用是表示学习这个课程的人有都少个的
  iconRegistry.addSvgIcon('person-outline', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-person_outline-24px.svg`));
  //上一页图标
  iconRegistry.addSvgIcon('navigate-before', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-navigate_before-24px.svg`));
  //下一页图标
  iconRegistry.addSvgIcon('navigate-next', sanitizer.bypassSecurityTrustResourceUrl(`${imgUrl}/baseline-navigate_next-24px.svg`));
  //手机图标
  iconRegistry.addSvgIcon('iphone', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-phone_iphone-24px.svg`));
  //邮箱图标
  iconRegistry.addSvgIcon('email-outline', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-mail_outline-24px.svg`));
  //学籍图标
  iconRegistry.addSvgIcon( 'school', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-school-24px.svg`));
  //关闭图标
  iconRegistry.addSvgIcon( 'close', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-close-24px.svg`));
  //帮助图标
  iconRegistry.addSvgIcon( 'help', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-help-24px.svg`));
  //社交图标
  iconRegistry.addSvgIcon( 'announcement', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/outline-announcement-24px.svg`));
  //安全图标
  iconRegistry.addSvgIcon( 'beenhere', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/outline-verified_user-24px.svg`))
  //编辑图标
  iconRegistry.addSvgIcon( 'edit', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/outline-edit-24px.svg`));
  //home图标
  iconRegistry.addSvgIcon( 'home', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-home-24px.svg`));
  //书籍图标
  iconRegistry.addSvgIcon( 'book', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-book-24px.svg`));
  //设置图标
  iconRegistry.addSvgIcon( 'setting', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseling-setting-20px.svg`));
  //文章图标
  iconRegistry.addSvgIcon( 'library-book', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-library_books-24px.svg`));
  //路径图标
  iconRegistry.addSvgIcon( 'rout', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/rout.svg`));
  //半圆图标
  iconRegistry.addSvgIcon( 'semicircle', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/半圆.svg`));
  //空心圆
  iconRegistry.addSvgIcon( 'radio-button', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-radio_button_unchecked-24px.svg`));
  //播放图标
  iconRegistry.addSvgIcon( 'play-circle', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-play_circle_filled-24px.svg`));
  //已完成图标
  iconRegistry.addSvgIcon( 'check-circle', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-check_circle-24px.svg`));
  //点赞图标
  iconRegistry.addSvgIcon( 'thumb-up', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-thumb_up-24px.svg`));
  //眼睛图标
  iconRegistry.addSvgIcon( 'remove-red-eye', sanitizer.bypassSecurityTrustResourceUrl( `${imgUrl}/baseline-remove_red_eye-24px.svg`));

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ];
  days.forEach(d => iconRegistry.addSvgIcon(`day${d}`, sanitizer.bypassSecurityTrustResourceUrl(`${dayUrl}/day${d}.svg`)))
};
