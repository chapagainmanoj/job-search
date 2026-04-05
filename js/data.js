// ── ATS PLATFORM DEFINITIONS ──────────────────────────────
const ATS = {
    ashby: { name: 'Ashby', badge: 'b-ashby', url: 'jobs.ashbyhq.com', href: 'https://jobs.ashbyhq.com' },
    lever: { name: 'Lever', badge: 'b-lever', url: 'jobs.lever.co', href: 'https://jobs.lever.co' },
    gh: { name: 'Greenhouse', badge: 'b-gh', url: 'job-boards.greenhouse.io', href: 'https://job-boards.greenhouse.io' },
    workable: { name: 'Workable', badge: 'b-workable', url: 'apply.workable.com', href: 'https://apply.workable.com' },
    recruitee: { name: 'Recruitee', badge: 'b-recruitee', url: 'recruitee.com', href: 'https://recruitee.com/companies' },
    smart: { name: 'SmartRecruiters', badge: 'b-smart', url: 'jobs.smartrecruiters.com', href: 'https://jobs.smartrecruiters.com' },
    tailor: { name: 'Teamtailor', badge: 'b-tailor', url: 'teamtailor.com', href: 'https://www.teamtailor.com' },
    personio: { name: 'Personio', badge: 'b-personio', url: 'jobs.personio.com', href: 'https://jobs.personio.com' },
    personioDE: { name: 'Personio (DE)', badge: 'b-personio', url: 'jobs.personio.de', href: 'https://jobs.personio.de' },
    pageup: { name: 'PageUp', badge: 'b-pageup', url: 'pageuppeople.com', href: 'https://www.pageuppeople.com' },
    workday: { name: 'Workday', badge: 'b-workday', url: 'myworkdayjobs.com', href: 'https://www.myworkdayjobs.com' },
    breezy: { name: 'Breezy HR', badge: 'b-breezy', url: 'breezy.hr', href: 'https://breezy.hr' },
    pinpoint: { name: 'Pinpoint', badge: 'b-pinpoint', url: 'pinpointhq.com', href: 'https://www.pinpointhq.com' },
    zoho: { name: 'Zoho Recruit', badge: 'b-zoho', url: 'zohorecruit.com', href: 'https://www.zoho.com/recruit' },
    taleo: { name: 'Taleo (Oracle)', badge: 'b-taleo', url: 'taleo.net', href: 'https://www.oracle.com/human-capital-management/taleo' },
};

// ── LOCATION & SEARCH QUERY DEFINITIONS ───────────────────
const LOCS = {
    global: {
        flag: '🌍', title: 'Global Remote',
        desc: 'Fully remote roles open to candidates worldwide — no geo-restriction',
        cards: [
            { ats: 'ashby', q: 'site:jobs.ashbyhq.com {{KW1}} {{KW2}} remote -intern -junior -jobgether -US -USA -Canada' },
            { ats: 'lever', q: 'site:jobs.lever.co {{KW1}} {{KW2}} remote ("worldwide" OR "anywhere" OR "global remote") -intern -junior -"US only" -"USA only" -jobgether' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} remote -intern -junior -jobgether -US -USA -Canada' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} remote -intern -junior -jobgether -US -USA -Canada' },
            { ats: 'recruitee', q: 'site:recruitee.com {{KW1}} {{KW2}} remote ("worldwide" OR "anywhere" OR "global") -intern -junior -US -USA -Canada' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} remote ("worldwide" OR "anywhere" OR "global") -intern -junior -"US only" -"USA only"' },
            { ats: 'tailor', q: 'site:teamtailor.com {{KW1}} {{KW2}} remote ("worldwide" OR "anywhere" OR "global remote") -intern -junior -"US only" -"USA only"' },
        ]
    },
    au: {
        flag: '🇦🇺', title: 'Australia',
        desc: 'On-site, hybrid or remote roles based in Australia (Sydney, Melbourne, Brisbane, Perth)',
        cards: [
            { ats: 'pageup', q: 'site:pageuppeople.com {{KW1}} {{KW2}} (australia OR sydney OR melbourne OR brisbane OR "remote australia") -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (australia OR sydney OR melbourne OR brisbane) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (australia OR sydney OR melbourne OR remote) -intern -junior' },
            { ats: 'lever', q: 'site:jobs.lever.co {{KW1}} {{KW2}} (australia OR sydney OR melbourne OR remote) -intern -junior' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} (australia OR sydney OR melbourne) -intern -junior' },
        ]
    },
    nz: {
        flag: '🇳🇿', title: 'New Zealand',
        desc: 'On-site or remote-NZ roles in Auckland, Wellington, Christchurch',
        cards: [
            { ats: 'pageup', q: 'site:pageuppeople.com {{KW1}} {{KW2}} ("new zealand" OR auckland OR wellington OR christchurch) -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} ("new zealand" OR auckland OR wellington) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} ("new zealand" OR auckland OR wellington OR remote) -intern -junior' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} ("new zealand" OR auckland OR wellington) -intern -junior' },
        ]
    },
    eu: {
        flag: '🇪🇺', title: 'Europe (General)',
        desc: 'Remote-Europe or pan-EU roles — excludes US-only, open continent-wide',
        cards: [
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (remote OR europe) -intern -junior -"US only" -"USA only" -"United States only"' },
            { ats: 'recruitee', q: 'site:recruitee.com {{KW1}} {{KW2}} (remote OR europe) -intern -junior -"US only" -"USA only"' },
            { ats: 'tailor', q: 'site:teamtailor.com {{KW1}} {{KW2}} (remote OR europe) -intern -junior -"US only" -"USA only"' },
            { ats: 'personio', q: 'site:jobs.personio.com {{KW1}} {{KW2}} (remote OR europe) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (remote OR europe) -intern -junior -"US only" -"USA only"' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} (remote OR europe) -intern -junior -"US only" -"USA only"' },
            { ats: 'pinpoint', q: 'site:pinpointhq.com {{KW1}} {{KW2}} remote -intern -junior' },
        ]
    },
    nl: {
        flag: '🇳🇱', title: 'Netherlands',
        desc: 'On-site or hybrid in Amsterdam, Rotterdam, Eindhoven — or remote-NL',
        cards: [
            { ats: 'recruitee', q: 'site:recruitee.com {{KW1}} {{KW2}} (netherlands OR amsterdam OR rotterdam OR eindhoven OR remote) -intern -junior' },
            { ats: 'tailor', q: 'site:teamtailor.com {{KW1}} {{KW2}} (netherlands OR amsterdam OR rotterdam OR remote) -intern -junior' },
            { ats: 'personio', q: 'site:jobs.personio.com {{KW1}} {{KW2}} (netherlands OR amsterdam OR rotterdam) -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (netherlands OR amsterdam OR rotterdam) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (netherlands OR amsterdam OR eindhoven OR remote) -intern -junior' },
        ]
    },
    de: {
        flag: '🇩🇪', title: 'Germany',
        desc: 'Berlin, Munich, Hamburg, Frankfurt — on-site, hybrid or remote-DE',
        cards: [
            { ats: 'personio', q: 'site:jobs.personio.com {{KW1}} {{KW2}} (germany OR berlin OR munich OR hamburg OR remote) -intern -junior' },
            { ats: 'personioDE', q: 'site:jobs.personio.de {{KW1}} {{KW2}} (germany OR berlin OR munich OR hamburg OR remote) -intern -junior' },
            { ats: 'tailor', q: 'site:teamtailor.com {{KW1}} {{KW2}} (germany OR berlin OR munich OR hamburg OR remote) -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (germany OR berlin OR munich OR hamburg) -intern -junior' },
            { ats: 'recruitee', q: 'site:recruitee.com {{KW1}} {{KW2}} (germany OR berlin OR munich OR remote) -intern -junior' },
        ]
    },
    es: {
        flag: '🇪🇸', title: 'Spain',
        desc: 'Madrid, Barcelona — on-site, hybrid or remote-Spain',
        cards: [
            { ats: 'tailor', q: 'site:teamtailor.com {{KW1}} {{KW2}} (spain OR madrid OR barcelona OR remote) -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (spain OR madrid OR barcelona) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (spain OR madrid OR barcelona OR remote) -intern -junior' },
            { ats: 'recruitee', q: 'site:recruitee.com {{KW1}} {{KW2}} (spain OR madrid OR barcelona OR remote) -intern -junior' },
        ]
    },
    pt: {
        flag: '🇵🇹', title: 'Portugal',
        desc: 'Lisbon, Porto — on-site, hybrid or remote-Portugal',
        cards: [
            { ats: 'tailor', q: 'site:teamtailor.com {{KW1}} {{KW2}} (portugal OR lisbon OR porto OR remote) -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (portugal OR lisbon OR porto) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (portugal OR lisbon OR porto OR remote) -intern -junior' },
            { ats: 'recruitee', q: 'site:recruitee.com {{KW1}} {{KW2}} (portugal OR lisbon OR porto OR remote) -intern -junior' },
        ]
    },
    sg: {
        flag: '🇸🇬', title: 'Singapore',
        desc: 'On-site or hybrid in Singapore — Asia tech hub',
        cards: [
            { ats: 'ashby', q: 'site:jobs.ashbyhq.com {{KW1}} {{KW2}} (singapore OR remote) -intern -junior -"US" -"US only" -"USA only" -Canada' },
            { ats: 'lever', q: 'site:jobs.lever.co {{KW1}} {{KW2}} singapore -intern -junior' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} singapore -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} singapore -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} singapore -intern -junior' },
        ]
    },
    in: {
        flag: '🇮🇳', title: 'India',
        desc: 'Bangalore, Hyderabad, Mumbai, Pune — or remote-India',
        cards: [
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (india OR bangalore OR hyderabad OR mumbai OR pune) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (india OR bangalore OR hyderabad OR mumbai) -intern -junior' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} (india OR bangalore OR hyderabad OR remote) -intern -junior' },
            { ats: 'zoho', q: 'site:zohorecruit.com {{KW1}} {{KW2}} (india OR bangalore OR hyderabad OR mumbai) -intern -junior' },
        ]
    },
    ea: {
        flag: '🌏', title: 'South East Asia',
        desc: 'Thailand, Vietnam, Philippines, Malaysia, Indonesia — tech hubs across South East Asia',
        cards: [
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} (thailand OR vietnam OR philippines OR malaysia OR indonesia OR bangkok OR "ho chi minh" OR jakarta OR "kuala lumpur") -US -USA -Canada -intern -junior' },
            { ats: 'lever', q: 'site:jobs.lever.co {{KW1}} {{KW2}} (thailand OR vietnam OR philippines OR malaysia OR indonesia OR bangkok OR "ho chi minh" OR jakarta) -intern -junior' },
            { ats: 'ashby', q: 'site:jobs.ashbyhq.com {{KW1}} {{KW2}} (thailand OR vietnam OR philippines OR malaysia OR indonesia OR bangkok OR jakarta) -intern -junior' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (thailand OR vietnam OR philippines OR malaysia OR indonesia OR bangkok OR "ho chi minh" OR jakarta) -intern -junior' },
            { ats: 'workday', q: 'site:myworkdayjobs.com {{KW1}} {{KW2}} (thailand OR vietnam OR philippines OR malaysia OR indonesia OR bangkok OR jakarta) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (thailand OR vietnam OR philippines OR malaysia OR indonesia) -intern -junior' },
        ]
    },
    ae: {
        flag: '🇦🇪', title: 'UAE / Dubai',
        desc: 'Dubai, Abu Dhabi, Sharjah — or remote-UAE',
        cards: [
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} (UAE OR dubai OR "abu dhabi" OR sharjah) -intern -junior' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} (UAE OR dubai OR "abu dhabi") -intern -junior' },
            { ats: 'workday', q: 'site:myworkdayjobs.com {{KW1}} {{KW2}} (UAE OR dubai OR "abu dhabi") -intern -junior' },
            { ats: 'taleo', q: 'site:taleo.net {{KW1}} {{KW2}} (UAE OR dubai OR "abu dhabi") -intern -junior' },
        ]
    },
    us: {
        flag: '🇺🇸', title: 'US (No Visa Required)',
        desc: 'US-based remote or on-site roles — for those with existing work authorization (no sponsorship needed)',
        cards: [
            { ats: 'ashby', q: 'site:jobs.ashbyhq.com {{KW1}} {{KW2}} remote -intern -junior -"visa sponsorship" -"sponsorship required" -"requires sponsorship"' },
            { ats: 'lever', q: 'site:jobs.lever.co {{KW1}} {{KW2}} remote -intern -junior -"visa sponsorship" -"sponsorship required" -"requires sponsorship"' },
            { ats: 'gh', q: 'site:job-boards.greenhouse.io {{KW1}} {{KW2}} remote "united states" -intern -junior -"visa sponsorship" -"sponsorship required"' },
            { ats: 'workable', q: 'site:apply.workable.com {{KW1}} {{KW2}} remote US -intern -junior -"visa sponsorship" -"requires sponsorship"' },
            { ats: 'smart', q: 'site:jobs.smartrecruiters.com {{KW1}} {{KW2}} remote "united states" -intern -junior -"visa sponsorship" -"requires sponsorship"' },
        ]
    },
};
