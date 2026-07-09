const {Document,Packer,Paragraph,TextRun,HeadingLevel,Table,TableRow,TableCell,WidthType,BorderStyle}=require('docx');
const fs=require('fs');
const EM='2D6A4F',RG='C9956C',CH='2B2B2B',GR='6B6B6B';

const h1=(t)=>new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:t,color:EM,bold:true,size:36})],spacing:{before:400,after:200}});
const h2=(t)=>new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun({text:t,color:CH,bold:true,size:28})],spacing:{before:300,after:160}});
const h3=(t,c=CH)=>new Paragraph({heading:HeadingLevel.HEADING_3,children:[new TextRun({text:t,color:c,bold:true,size:24})],spacing:{before:240,after:120}});
const p=(t,opts={})=>new Paragraph({children:[new TextRun({text:t,size:22,color:CH,...opts})],spacing:{after:160}});
const bull=(t)=>new Paragraph({bullet:{level:0},children:[new TextRun({text:t,size:22,color:CH})],spacing:{after:100}});
const div=()=>new Paragraph({border:{bottom:{color:RG,style:BorderStyle.SINGLE,size:4}},spacing:{after:200}});

const tbl=(rows)=>new Table({
  width:{size:9000,type:WidthType.DXA},
  rows:rows.map((r,ri)=>new TableRow({
    children:r.map(c=>new TableCell({
      width:{size:Math.floor(9000/r.length),type:WidthType.DXA},
      shading:ri===0?{fill:'E8F5EE'}:{fill:'FFFFFF'},
      children:[new Paragraph({children:[new TextRun({text:String(c),size:ri===0?19:20,bold:ri===0,color:ri===0?EM:CH})],spacing:{before:80,after:80}})]
    }))
  }))
});

const usp = 'The only lifestyle image transformation coach in Singapore who combines 20 years of corporate intelligence, active BNI leadership, and a proven makeover methodology to turn overlooked men into unforgettable ones.';

const doc=new Document({sections:[{properties:{},children:[
  h1('KEYSTYLE — Complete Brand Strategy'),
  p('Lifestyle Image Transformation Coaching for Men | Flora Leong, Founder',{italic:true,color:RG}),
  div(),

  h1('PART 1: BRAND FOUNDATION'),
  h2('Image Consultation vs Image Transformation Coaching'),
  tbl([
    ['Dimension','Image Consultation','Image Transformation Coaching'],
    ['Core Focus','Advising on appearance','Holistic internal + external evolution'],
    ['Scope','One-off or project sessions','Ongoing: mindset, behaviour, image'],
    ['Deliverable','Style guide, colour palette','A transformed individual with new presence'],
    ['Client Role','Passive receiver of advice','Active co-creator of their own story'],
    ['Relationship','Transactional (advisor to client)','Transformational (coach-client partnership)'],
    ['Timeframe','Short-term (1 to few weeks)','Medium to long-term (1 month to retainer)'],
    ['Outcome','I look better','I show up differently in every area of my life'],
    ['Price Point','Lower (product/service feel)','Premium (results-driven, coach feel)'],
    ['Revenue Model','Per session / per project','Packages, retainers, group programmes'],
  ]),
  p(''),

  h2('Who Is Flora Leong'),
  p('Flora Leong is Singapore\'s leading Lifestyle Image Transformation Coach for Men. She spent 20 years in finance before pivoting into entrepreneurship, combining corporate discipline and human observation into Keystyle.'),
  bull('BNI Director Consultant — active referral network of hundreds'),
  bull('Image Transformation Coach — men\'s style, presence, executive identity'),
  bull('Community Builder — creator of the Level Up networking movement'),
  bull('Heritage Entrepreneur — co-founder of SOFLLE confectionery'),
  p(''),

  h3('Flora\'s Unique Selling Proposition',EM),
  p(usp,{bold:true,italic:true}),
  p(''),

  h2('How Keystyle Helps Men'),
  tbl([
    ['Client Archetype','His Pain Point','What Flora Does'],
    ['The Single Man','Smart and successful but invisible to women','Transforms style into a signal of confidence and desirability'],
    ['The Introvert Businessman','Brilliant ideas, overlooked in networking rooms','Builds an image that speaks before he opens his mouth'],
    ['The Agency Leader','Leads a team but lacks commanding presence','Builds an executive image that radiates leadership'],
    ['The Mid-Level Executive','Hard worker, invisible to senior leadership','Crafts a wardrobe that signals readiness for the next level'],
  ]),
  p(''),

  h2('Mission & Vision'),
  h3('Mission'),
  p('To empower men to step into their fullest potential through intentional image transformation, combining proven style strategy, holistic coaching, and personalised execution, so they can command respect, build meaningful connections, and achieve the success they have already earned.'),
  h3('Vision'),
  p('A Singapore where every ambitious man walks into every room knowing his presence reflects his potential, and where Keystyle is the name behind that transformation.'),
  p(''),

  h2('Brand Colours & Visual Identity'),
  tbl([
    ['Colour','Role','HEX Code','Usage'],
    ['Deep Emerald','Primary Brand','#2D6A4F','Logo, headings, CTA buttons'],
    ['Tint Green','Secondary Brand','#52B788','Accents, backgrounds, highlights'],
    ['Rose Gold','Accent / Warmth','#C9956C','Icons, dividers, call-outs'],
    ['Blush Pink','Soft Accent','#E8A598','Hover states, gentle highlights'],
    ['Off-White Cream','Background','#FAF7F2','Page backgrounds, cards'],
    ['Charcoal Grey','Typography','#2B2B2B','Body text, headings, dark sections'],
  ]),
  div(),

  h1('PART 2: PACKAGES, SOP & MEMBERSHIP'),
  h2('Service Packages Overview'),
  tbl([
    ['Package','Price (SGD)','Duration','Best For'],
    ['Spark','$497','1-2 weeks','First-timers, quick confidence win'],
    ['Signature','$1,297','3-4 weeks','Professionals wanting real wardrobe overhaul'],
    ['Supreme','$2,497','6-8 weeks','Executives wanting total transformation'],
    ['Sovereign','$4,997','10-12 weeks','Leaders wanting elite personal branding'],
    ['Brotherhood Membership','$97-$297/mth','Ongoing','Keystyle alumni retainer community'],
  ]),
  p(''),

  h2('SOP: Spark Package ($497) — 1 to 2 Weeks'),
  tbl([
    ['Phase','Day','Task','Owner'],
    ['Pre-session','D-3','Send intake form + request wardrobe photos','Flora'],
    ['Pre-session','D-1','Review responses, prepare colour swatch kit','Flora'],
    ['Week 1','D1','90-min Discovery Session: goals, colour, body type','Flora + Client'],
    ['Week 1','D2-D3','Analyse wardrobe photos, identify Keep/Donate/Replace','Flora'],
    ['Week 1','D4-D5','Prepare and send Personal Style Blueprint PDF','Flora'],
    ['Week 2','D7','WhatsApp check-in on blueprint usage','Flora'],
    ['Week 2','D10','Request feedback and testimonial','Flora'],
    ['Week 2','D14','Offer upgrade to Signature or Brotherhood','Flora'],
  ]),
  p(''),

  h2('SOP: Signature Package ($1,297) — 3 to 4 Weeks'),
  tbl([
    ['Phase','Day','Task','Owner'],
    ['Pre-session','D-5','Intake form + lifestyle questionnaire','Flora'],
    ['Week 1','D1','Discovery Session (90 min)','Flora + Client'],
    ['Week 1','D2','In-person Wardrobe Audit (2-3 hrs)','Both'],
    ['Week 1','D3-D5','Build shopping list, research stores','Flora'],
    ['Week 2','D8','Personal Shopping Trip (half-day)','Both'],
    ['Week 2','D9-D10','Style 5 outfits, photograph them for lookbook','Flora'],
    ['Week 3','D12','Grooming Consultation (60 min)','Flora'],
    ['Week 3','D14','Deliver Signature Lookbook PDF','Flora'],
    ['Week 4','D21','Mid-month WhatsApp check-in','Flora'],
    ['Month End','D30','Final check-in, testimonial, offer upgrade','Flora'],
  ]),
  p(''),

  h2('SOP: Supreme Package ($2,497) — 6 to 8 Weeks'),
  tbl([
    ['Week','Key Activities'],
    ['Week 1','Discovery Session + lifestyle deep-dive + Wardrobe Audit'],
    ['Week 2','Shopping Trip #1 + Personal Brand Narrative Session #1'],
    ['Week 3','Grooming Consultation + Lookbook Draft (10+ outfits)'],
    ['Week 4','Brand Narrative Session #2 + LinkedIn bio draft + headshot coordination'],
    ['Week 5','Shopping Trip #2 + Networking Presence Coaching Session'],
    ['Week 6','Deliver Supreme Lookbook + Brand Narrative Document'],
    ['Week 6-8','Plan 3 upcoming events, style check for each'],
    ['Month 3','90-day review call + testimonial + offer Sovereign or Brotherhood'],
  ]),
  p(''),

  h2('SOP: Sovereign Package ($4,997) — 10 to 12 Weeks'),
  tbl([
    ['Phase','Weeks','Key Activities'],
    ['Discover','W1-W2','Extended Discovery (2 sessions), lifestyle audit, brand narrative deep-dive'],
    ['Design','W3-W4','Wardrobe audit, Shopping Trip #1, tailor introduction, grooming plan'],
    ['Build','W5-W6','Shopping Trip #2, brand narrative finalised, LinkedIn review'],
    ['Elevate','W7-W8','Shopping Trip #3, bespoke items, photoshoot coordination'],
    ['Deliver','W9-W10','Professional photoshoot day, Lookbook delivery, social media update plan'],
    ['Integrate','W11-W12','Networking presence coaching, event planning, 30-day review'],
    ['Post-Package','Q2-Q4','Quarterly lifestyle review calls (4 per year), priority WhatsApp access'],
  ]),
  p(''),

  h2('The Keystyle Brotherhood — Membership Programme'),
  tbl([
    ['Tier','Monthly Fee','Who It Is For'],
    ['Brotherhood Member','$97/month','Graduates of Spark or Signature packages'],
    ['Brotherhood Elite','$197/month','Graduates of Supreme package'],
    ['Brotherhood Sovereign','$297/month','Graduates of Sovereign (incl. quarterly 1:1 with Flora)'],
  ]),
  p(''),
  h3('What Every Brotherhood Member Gets',EM),
  bull('Monthly group coaching call with Flora (60 min, online)'),
  bull('Private WhatsApp/Telegram group for style questions'),
  bull('Monthly Style of the Month brief with trends and seasonal tips'),
  bull('Members-only discounts with tailor, grooming, and photographer partners'),
  bull('Early access to Keystyle events and masterclasses'),
  bull('Monthly Accountability Check — share wins and style updates'),
  p(''),

  h2('Sustainable Retainer Business Model'),
  tbl([
    ['Revenue Stream','Product','Monthly Potential (SGD)'],
    ['Package Sales','Spark to Sovereign (new clients)','$2,000-$8,000'],
    ['Brotherhood Memberships','20 members x avg $150/month','$3,000'],
    ['Corporate Workshops','2 workshops x $800-$1,500 each','$2,000-$3,000'],
    ['Partner Referral Fees','Tailors, barbers, photographers','$500-$1,000'],
    ['Training Programme','Coach training (quarterly cohorts)','$3,000-$6,000/quarter'],
    ['Speaking and Events','BNI talks, corporate keynotes','$500-$2,000/event'],
  ]),
  div(),

  h1('PART 3: MARKETING STRATEGY'),
  h2('Online Marketing — LinkedIn (Primary Platform)'),
  bull('Professional headshot in Keystyle brand environment'),
  bull('Banner: Lifestyle Image Transformation Coach for Men | Keystyle'),
  bull('Tagline: I help ambitious men look the part, own the room, and level up their life'),
  bull('About section: Flora\'s story + 3 client transformation outcomes'),
  bull('Post 3-4 times per week across 5 content pillars'),
  p(''),

  h3('LinkedIn Content Pillars',EM),
  tbl([
    ['Pillar','Post Type','Example'],
    ['Authority','Thought leadership tips','5 wardrobe mistakes Singaporean professionals make'],
    ['Transformation Proof','Before/after client stories','Eric came to me before a major pitch. Here\'s what changed.'],
    ['Behind the Scenes','Flora\'s coaching process','What happens inside a Keystyle wardrobe audit'],
    ['Mindset','Coaching insights','Looking successful is not vanity. It is strategy.'],
    ['Community','Spotlights and events','Proud of this Brotherhood member who just got promoted'],
  ]),
  p(''),

  h2('Offline Marketing'),
  h3('BNI Leverage',EM),
  bull('Give Keystyle feature presentation at chapter meetings (10-min education slot)'),
  bull('Identify 5-10 ideal Keystyle referrers per chapter'),
  bull('Create a BNI Referral Brief (1-page PDF of ideal referral profile)'),
  bull('Offer 10% referral fee or complimentary Spark session for referrers'),
  p(''),

  h3('Strategic Partnerships',EM),
  tbl([
    ['Partner Type','What They Get','What Keystyle Gets'],
    ['Tailors','Exclusive referrals from Keystyle','Commission + reverse referrals'],
    ['Barbers / Groomers','Keystyle client referrals','Grooming consultation partnership'],
    ['Photographers','Headshot bookings','Referral fee or co-branding'],
    ['Fengshui Masters','Style-fengshui combo clients','Joint events, cross-referrals'],
    ['Life / Charisma Coaches','Holistic transformation referrals','Bundle packages together'],
    ['Insurance Agencies','Corporate workshops for agents','Access to 20-100 men per session'],
    ['Matchmaking Services','Style coaching as dating prep','Referral fee from matchmakers'],
  ]),
  p(''),

  h2('Content Calendar: Pre-Launch to Scale'),
  tbl([
    ['Phase','Week/Day','Activity','Platform'],
    ['Pre-Launch','W1','Flora\'s story teaser + Coming Soon landing page','LinkedIn + Website'],
    ['Pre-Launch','W2','Post: Why I left finance to help men level up','LinkedIn'],
    ['Pre-Launch','W3','Style tips carousel: 5 wardrobe mistakes men make','Instagram'],
    ['Pre-Launch','W4','Countdown: Keystyle launches in 7 days','All platforms'],
    ['Soft Launch','D1','Keystyle is officially open + early-bird offer','All + Email'],
    ['Soft Launch','D1','Personal WhatsApp messages to top 100 contacts','WhatsApp'],
    ['Soft Launch','D2','BNI chapter formal announcement','In-person'],
    ['Soft Launch','D7','Reel: What a Keystyle wardrobe audit looks like','Instagram'],
    ['Growth','Month 2 W1','Launch Brotherhood membership to existing clients','All'],
    ['Growth','Month 2 W2','Host first Keystyle Masterclass event','In-person'],
    ['Growth','Month 3 W1','Pitch first corporate lunch and learn','Direct outreach'],
    ['Scale','Month 4','Speak at 1 major Singapore business conference','Speaking'],
    ['Scale','Month 5','Sign first corporate retainer','Corporate'],
    ['Scale','Month 6','Pitch story to Singapore media','PR/Media'],
  ]),
  div(),

  h1('PART 4: TRAINING PROGRAMMES & CERTIFICATIONS'),
  h2('Training Programmes for Men'),
  tbl([
    ['Programme','Price','Duration','Best For'],
    ['Style Foundations Workshop','$197-$397','1 day / 4 hrs online','Men beginners'],
    ['Executive Presence Programme','$697-$1,197','4 weeks / 2-day intensive','Men intermediate'],
    ['Total Lifestyle Transformation Masterclass','$1,997/cohort','12 weeks','Men advanced group'],
  ]),
  p(''),

  h2('Image Coach Certification Programmes (for Women and Coaches)'),
  tbl([
    ['Level','Price','Duration','Outcome'],
    ['Level A: Foundations of Image Coaching','$997','4 weeks online','Can conduct discovery sessions and wardrobe audits independently'],
    ['Level B: Advanced Image Transformation Coach','$1,997','8 weeks live','Can deliver full Keystyle-style transformation programmes'],
    ['Level C: Keystyle Master Coach (Train the Trainer)','$4,997','12 weeks + mentorship','Licensed to deliver Keystyle-branded programmes'],
  ]),
  p(''),

  h2('Certifications Flora Should Pursue'),
  tbl([
    ['Certificate','Body','Priority','Timeline'],
    ['AICI First Level Certification (FLC)','AICI','Highest','Month 1-3'],
    ['Certified Colour Analyst','International Image Institute','Very High','Month 3-6'],
    ['ICF Associate Certified Coach (ACC)','International Coaching Federation','Very High','Month 6-12'],
    ['NLP Practitioner','ABNLP / Society of NLP','High','Month 9-12'],
    ['AICI Certified Image Professional (CIP)','AICI','Highest','Year 2'],
    ['ICF Professional Certified Coach (PCC)','International Coaching Federation','Very High','Year 2-3'],
  ]),
  p('Note: SkillsFuture Credits (Singapore) can offset costs for many eligible programmes.',{italic:true,color:GR}),
  div(),

  h1('PART 5: 12-MONTH ROADMAP & ACTION PLAN'),
  h2('12-Month Business Roadmap'),
  tbl([
    ['Quarter','Month','Focus','Key Milestone'],
    ['Q1','Month 1','Brand Setup + Pre-launch','Finalise brand, website, social profiles; enrol in AICI FLC'],
    ['Q1','Month 2','Soft Launch','Open Keystyle; target first 5 paying clients'],
    ['Q1','Month 3','Testimonials + Brotherhood','Collect 5 testimonials; launch Brotherhood membership'],
    ['Q2','Month 4','Events + Certification','Host first Masterclass; complete Colour Analyst cert'],
    ['Q2','Month 5','Corporate','Sign first corporate retainer'],
    ['Q2','Month 6','Media + Review','Pitch Singapore media; 6-month revenue review'],
    ['Q3','Month 7','Speaking + ICF','Secure 2 paid speaking engagements; log coaching hours'],
    ['Q3','Month 8','Training Launch','Open enrolment for Image Coach Certification Level A'],
    ['Q3','Month 9','Brotherhood Growth','Target 20 Brotherhood members; host first Sovereign Dinner'],
    ['Q4','Month 10','Systems + Team','Document all SOPs; hire part-time assistant'],
    ['Q4','Month 11','NLP Certification','Complete NLP Practitioner certification'],
    ['Q4','Month 12','Annual Review','P&L review; set Year 2 targets; open Level C applications'],
  ]),
  p(''),

  h2('Revenue Milestones'),
  tbl([
    ['Milestone','Target Revenue','Timeline'],
    ['First paying client','$497 (Spark)','Week 5-6'],
    ['First $3,000 month','2 Signature + 1 Spark','Month 2-3'],
    ['First $5,000 month','Mix of packages + Brotherhood','Month 4-5'],
    ['First $10,000 month','Packages + Brotherhood + Corporate','Month 6-8'],
    ['Stable $15,000/month','Full retainer model running','Month 10-12'],
  ]),
  p(''),

  h2('Week 1 Immediate Action Checklist'),
  bull('Register Keystyle brand on ACRA (if not done)'),
  bull('Purchase keystyle.sg domain'),
  bull('Create Keystyle Instagram Business and LinkedIn Company Page'),
  bull('Update Flora\'s personal LinkedIn with new positioning and headshot'),
  bull('Create a simple Coming Soon page with email capture'),
  bull('Write and send 10 personal WhatsApp messages announcing Keystyle'),
  bull('Identify 5 BNI members who are ideal Keystyle referrers'),
  bull('Book a professional headshot session'),
  bull('Enrol in AICI First Level Certification'),
  bull('Draft the Spark Package intake form and welcome email'),
  p(''),
  p('--- End of Keystyle Complete Brand Strategy ---',{italic:true,color:GR}),
  p('Prepared for Flora Leong | Keystyle | keystyle.sg',{italic:true,color:GR}),
]}]});

Packer.toBuffer(doc).then(buf=>{
  fs.writeFileSync('Keystyle_Complete_Brand_Strategy.docx',buf);
  console.log('DOCX_DONE');
}).catch(e=>console.error(e));
