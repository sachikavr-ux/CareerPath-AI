const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const results = [];

  function log(test, status, detail) {
    const icon = status === 'PASS' ? '✅' : '❌';
    results.push({ test, status, detail });
    console.log(`${icon} ${test}: ${detail}`);
  }

  try {
    // Test 1: Landing page loads
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
    const title = await page.title();
    log('Landing Page Load', 'PASS', `Title: ${title}`);

    // Test 2: Hero section
    const heroText = await page.textContent('h1');
    log('Hero Section', heroText?.includes('Career') ? 'PASS' : 'FAIL', heroText?.substring(0, 50));

    // Test 3: Navigation links exist
    const navLinks = await page.$$('nav a');
    log('Navigation Links', navLinks.length >= 5 ? 'PASS' : 'FAIL', `Found ${navLinks.length} nav links`);

    // Test 4: Feature cards
    const featureCards = await page.$$('[class*="rounded-2xl"]');
    log('Feature Cards', featureCards.length >= 8 ? 'PASS' : 'FAIL', `Found ${featureCards.length} cards`);

    // Test 5: CTA buttons
    const ctaButtons = await page.$$('a[href="/assessment"]');
    log('CTA Buttons', ctaButtons.length >= 1 ? 'PASS' : 'FAIL', `Found ${ctaButtons.length} CTA buttons`);

    // Test 6: Login page
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle', timeout: 15000 });
    const loginForm = await page.$('form');
    log('Login Page', loginForm ? 'PASS' : 'FAIL', loginForm ? 'Form found' : 'No form');

    // Test 7: Login form inputs
    const emailInput = await page.$('input[type="email"]');
    const passwordInput = await page.$('input[type="password"]');
    log('Login Inputs', emailInput && passwordInput ? 'PASS' : 'FAIL', 'Email and password inputs found');

    // Test 8: Register page
    await page.goto('http://localhost:3000/register', { waitUntil: 'networkidle', timeout: 15000 });
    const registerForm = await page.$('form');
    log('Register Page', registerForm ? 'PASS' : 'FAIL', registerForm ? 'Form found' : 'No form');

    // Test 9: Dashboard page
    await page.goto('http://localhost:3000/dashboard', { waitUntil: 'networkidle', timeout: 15000 });
    const dashboardContent = await page.textContent('body');
    log('Dashboard Page', dashboardContent?.includes('Welcome') ? 'PASS' : 'FAIL', 'Dashboard loaded');

    // Test 10: Profile page
    await page.goto('http://localhost:3000/profile', { waitUntil: 'networkidle', timeout: 15000 });
    const profileContent = await page.textContent('body');
    log('Profile Page', profileContent?.includes('Student Profile') ? 'PASS' : 'FAIL', 'Profile form loaded');

    // Test 11: Assessment page
    await page.goto('http://localhost:3000/assessment', { waitUntil: 'networkidle', timeout: 15000 });
    const assessmentContent = await page.textContent('body');
    log('Assessment Page', assessmentContent?.includes('Assessment') ? 'PASS' : 'FAIL', 'Assessment loaded');

    // Test 12: Explorer page
    await page.goto('http://localhost:3000/explorer', { waitUntil: 'networkidle', timeout: 15000 });
    const explorerContent = await page.textContent('body');
    log('Explorer Page', explorerContent?.includes('Career Explorer') ? 'PASS' : 'FAIL', 'Explorer loaded');

    // Test 13: Career cards in explorer
    const careerCards = await page.$$('button[class*="rounded-2xl"]');
    log('Career Cards', careerCards.length >= 10 ? 'PASS' : 'FAIL', `Found ${careerCards.length} career cards`);

    // Test 14: Chat page
    await page.goto('http://localhost:3000/chat', { waitUntil: 'networkidle', timeout: 15000 });
    const chatContent = await page.textContent('body');
    log('Chat Page', chatContent?.includes('Career Mentor') ? 'PASS' : 'FAIL', 'Chat loaded');

    // Test 15: Chat input
    const chatInput = await page.$('input[placeholder*="career"]');
    log('Chat Input', chatInput ? 'PASS' : 'FAIL', chatInput ? 'Input found' : 'No input');

    // Test 16: Skill Gap page
    await page.goto('http://localhost:3000/skill-gap', { waitUntil: 'networkidle', timeout: 15000 });
    const skillGapContent = await page.textContent('body');
    log('Skill Gap Page', skillGapContent?.includes('Skill Gap') ? 'PASS' : 'FAIL', 'Skill Gap loaded');

    // Test 17: Roadmap page
    await page.goto('http://localhost:3000/roadmap', { waitUntil: 'networkidle', timeout: 15000 });
    const roadmapContent = await page.textContent('body');
    log('Roadmap Page', roadmapContent?.includes('Roadmap') ? 'PASS' : 'FAIL', 'Roadmap loaded');

    // Test 18: Recommendations page
    await page.goto('http://localhost:3000/recommendations', { waitUntil: 'networkidle', timeout: 15000 });
    const recContent = await page.textContent('body');
    log('Recommendations Page', recContent?.includes('Career') ? 'PASS' : 'FAIL', 'Recommendations loaded');

    // Test 19: API health check
    const apiResponse = await page.evaluate(async () => {
      const res = await fetch('/api/ai/assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: {
            id: 'test', name: 'Test', age: 20, location: 'Bangalore',
            educationLevel: 'B.Tech', college: 'Test', degree: 'B.Tech',
            branch: 'CS', currentYear: '2nd', graduationYear: '2027',
            tenthPercentage: 85, twelfthPercentage: 80, cgpa: 8.0,
            semesterGpa: 8.2, favoriteSubjects: [], difficultSubjects: [],
            academicAchievements: [], skills: [{ name: 'Python', category: 'technical', level: 'Intermediate' }],
            interests: ['AI'], strengths: ['Problem Solving'], weaknesses: ['Communication'],
            careerGoal: 'AI Engineer', workPreference: 'Tech', personalityTraits: [],
            projects: [], certifications: []
          }
        })
      });
      return { status: res.status, ok: res.ok };
    });
    log('API Assessment', apiResponse.ok ? 'PASS' : 'FAIL', `Status: ${apiResponse.status}`);

    // Test 20: Scroll functionality
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    const scrollY = await page.evaluate(() => window.scrollY);
    log('Scroll Function', scrollY > 0 ? 'PASS' : 'FAIL', `Scrolled to ${scrollY}px`);

    // Test 21: Click navigation
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 15000 });
    await page.click('a[href="/assessment"]');
    await page.waitForURL('**/assessment', { timeout: 10000 });
    log('Click Navigation', page.url().includes('assessment') ? 'PASS' : 'FAIL', `Navigated to: ${page.url()}`);

    // Test 22: Form input interaction
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle', timeout: 15000 });
    await page.fill('input[type="email"]', 'test@example.com');
    const emailValue = await page.inputValue('input[type="email"]');
    log('Form Input', emailValue === 'test@example.com' ? 'PASS' : 'FAIL', `Value: ${emailValue}`);

    // Test 23: Button click
    await page.goto('http://localhost:3000/login', { waitUntil: 'networkidle', timeout: 15000 });
    await page.fill('input[type="email"]', 'test@test.com');
    await page.fill('input[type="password"]', 'password123');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(2000);
    log('Login Button Click', page.url().includes('dashboard') ? 'PASS' : 'FAIL', `After login: ${page.url()}`);

    // Test 24: Sidebar navigation
    await page.goto('http://localhost:3000/dashboard', { waitUntil: 'networkidle', timeout: 15000 });
    const sidebarLinks = await page.$$('aside a');
    log('Sidebar Navigation', sidebarLinks.length >= 5 ? 'PASS' : 'FAIL', `Found ${sidebarLinks.length} sidebar links`);

    // Test 25: Responsive meta tag
    const viewport = await page.evaluate(() => {
      const meta = document.querySelector('meta[name="viewport"]');
      return meta ? meta.getAttribute('content') : null;
    });
    log('Responsive Meta', viewport ? 'PASS' : 'FAIL', viewport || 'No viewport meta');

  } catch (error) {
    console.error('Test error:', error.message);
  } finally {
    await browser.close();
    
    // Summary
    console.log('\n=== TEST SUMMARY ===');
    const passed = results.filter(r => r.status === 'PASS').length;
    const failed = results.filter(r => r.status === 'FAIL').length;
    console.log(`Total: ${results.length} | Passed: ${passed} | Failed: ${failed}`);
    console.log(`Success Rate: ${Math.round((passed / results.length) * 100)}%`);
    
    if (failed > 0) {
      console.log('\nFailed Tests:');
      results.filter(r => r.status === 'FAIL').forEach(r => {
        console.log(`  ❌ ${r.test}: ${r.detail}`);
      });
    }
  }
})();
