import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function extractAll() {
  console.log('Extracting and refining assets from UI designs...');

  // 1. Home page assets (6912 x 20136)
  const homeMeta = await sharp('UI/Home page.png').metadata();
  const hW = homeMeta.width;
  const hH = homeMeta.height;

  // Hero students photo (top right) - precise box avoiding text
  await sharp('UI/Home page.png')
    .extract({
      left: Math.round(hW * 0.518),
      top: Math.round(hH * 0.045),
      width: Math.round(hW * 0.465),
      height: Math.round(hH * 0.178)
    })
    .resize({ width: 1400 }) // High res optimized
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'hero-students.webp'));

  // Also png fallback
  await sharp('UI/Home page.png')
    .extract({
      left: Math.round(hW * 0.518),
      top: Math.round(hH * 0.045),
      width: Math.round(hW * 0.465),
      height: Math.round(hH * 0.178)
    })
    .resize({ width: 1400 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'hero-students.png'));

  // Home About Us student badge (woman in lavender circular cutout)
  await sharp('UI/Home page.png')
    .extract({
      left: Math.round(hW * 0.065),
      top: Math.round(hH * 0.468),
      width: Math.round(hW * 0.34),
      height: Math.round(hH * 0.138)
    })
    .resize({ width: 900 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'home-student-badge.png'));

  // 2. Programs page assets (5476 x 12866)
  const progMeta = await sharp('UI/Programs.png').metadata();
  const pW = progMeta.width;
  const pH = progMeta.height;

  // Program Card 1: 100 Days Tech Challenge
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.035),
      top: Math.round(pH * 0.228),
      width: Math.round(pW * 0.295),
      height: Math.round(pH * 0.063)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-100days.png'));

  // Program Card 2: Virtual Gaming Challenge
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.352),
      top: Math.round(pH * 0.228),
      width: Math.round(pW * 0.295),
      height: Math.round(pH * 0.063)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-gaming.png'));

  // Program Card 3: Community Competition
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.670),
      top: Math.round(pH * 0.228),
      width: Math.round(pW * 0.295),
      height: Math.round(pH * 0.063)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-competition.png'));

  // Program Card 4: MoonTech Hackathon
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.035),
      top: Math.round(pH * 0.384),
      width: Math.round(pW * 0.295),
      height: Math.round(pH * 0.063)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-hackathon.png'));

  // Program Card 5: Peer Mentorship Programme
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.352),
      top: Math.round(pH * 0.384),
      width: Math.round(pW * 0.295),
      height: Math.round(pH * 0.063)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-mentorship.png'));

  // Program Card 6: Project Showcase
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.670),
      top: Math.round(pH * 0.384),
      width: Math.round(pW * 0.295),
      height: Math.round(pH * 0.063)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-showcase.png'));

  // Featured Program 100 Days circular badge student
  await sharp('UI/Programs.png')
    .extract({
      left: Math.round(pW * 0.542),
      top: Math.round(pH * 0.553),
      width: Math.round(pW * 0.400),
      height: Math.round(pH * 0.193)
    })
    .resize({ width: 1000 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'program-featured-student.png'));

  // 3. Courses page (5476 x 9507) 3D Illustrations (with clean cropping)
  const cMeta = await sharp('UI/Courses.png').metadata();
  const cW = cMeta.width;
  const cH = cMeta.height;

  // Course 1: AI WebDev+ Cybersecurity
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.035),
      top: Math.round(cH * 0.274),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-ai-webdev.png'));

  // Course 2: Product Design
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.275),
      top: Math.round(cH * 0.274),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-product-design.png'));

  // Course 3: Cybersecurity
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.515),
      top: Math.round(cH * 0.274),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-cybersecurity.png'));

  // Course 4: Digital Marketing
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.755),
      top: Math.round(cH * 0.274),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-digital-marketing.png'));

  // Course 5: Web Development
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.035),
      top: Math.round(cH * 0.466),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-webdev.png'));

  // Course 6: AI Automation
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.275),
      top: Math.round(cH * 0.466),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-ai-automation.png'));

  // Course 7: Video Editing
  await sharp('UI/Courses.png')
    .extract({
      left: Math.round(cW * 0.515),
      top: Math.round(cH * 0.466),
      width: Math.round(cW * 0.218),
      height: Math.round(cH * 0.083)
    })
    .resize({ width: 600 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-video-editing.png'));

  // 4. About Us assets (5476 x 15851)
  const aMeta = await sharp('UI/About us page.png').metadata();
  const aW = aMeta.width;
  const aH = aMeta.height;

  // About Hero photo (top right)
  await sharp('UI/About us page.png')
    .extract({
      left: Math.round(aW * 0.45),
      top: Math.round(aH * 0.05),
      width: Math.round(aW * 0.54),
      height: Math.round(aH * 0.165)
    })
    .resize({ width: 1400 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'about-hero.png'));

  // Who It's For: Beginners
  await sharp('UI/About us page.png')
    .extract({
      left: Math.round(aW * 0.515),
      top: Math.round(aH * 0.605),
      width: Math.round(aW * 0.145),
      height: Math.round(aH * 0.052)
    })
    .resize({ width: 500 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'audience-beginners.png'));

  // Who It's For: Learners
  await sharp('UI/About us page.png')
    .extract({
      left: Math.round(aW * 0.672),
      top: Math.round(aH * 0.605),
      width: Math.round(aW * 0.145),
      height: Math.round(aH * 0.052)
    })
    .resize({ width: 500 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'audience-learners.png'));

  // Who It's For: Professionals
  await sharp('UI/About us page.png')
    .extract({
      left: Math.round(aW * 0.828),
      top: Math.round(aH * 0.605),
      width: Math.round(aW * 0.145),
      height: Math.round(aH * 0.052)
    })
    .resize({ width: 500 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'audience-professionals.png'));

  // 5. Course Detail open page (5476 x 11454)
  const cdMeta = await sharp('UI/Courses open.png').metadata();
  const cdW = cdMeta.width;
  const cdH = cdMeta.height;

  // Course detail hero 3D AI monitor
  await sharp('UI/Courses open.png')
    .extract({
      left: Math.round(cdW * 0.60),
      top: Math.round(cdH * 0.052),
      width: Math.round(cdW * 0.30),
      height: Math.round(cdH * 0.125)
    })
    .resize({ width: 800 })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'course-detail-ai-screen.png'));

  console.log('All refined assets extracted!');
}

extractAll().catch(err => {
  console.error('Error extracting assets:', err);
  process.exit(1);
});
