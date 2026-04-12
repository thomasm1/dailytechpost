-- NEWS seed from data/webDevAffairs.txt
-- Category mapping used: Web Dev Affairs -> category_id 10

INSERT INTO dailytech.news (
    id, title, url, category_id, version,  time_created,  time_updated
)
VALUES
    (50, 'Footnotes Issues | American Sociological Association', 'https://www.asanet.org/footnotes/footnotes-archive/', 10, 1, '2025-01-15',   '2026-04-10'),
    (51, 'Dailytech', 'http://localhost:4200/', 10, 1, '2025-01-15',   '2026-04-10'),
    (52, 'Inside Facebook''s Hellish Two Years-and Mark Zuckerberg''s Struggle to Fix it All | WIRED', 'https://www.wired.com/story/inside-facebook-mark-zuckerberg-2-years-of-hell/', 10, 1, '2025-01-15',   '2026-04-10'),
    (53, '404: This page could not be found.', 'https://www.coindesk.com/opera-browser-introduces-cryptocurrency-miner-protection-for-smartphones', 10, 1, '2025-01-15',   '2026-04-10'),
    (54, 'Washington state passes net neutrality law as states push back against the FCC', 'https://www.nbcnews.com/tech/tech-news/washington-state-passes-net-neutrality-law-states-push-back-against-n854086', 10, 1, '2025-01-15',   '2026-04-10'),
    (55, 'Amazon Knows Alexa Devices Are Laughing Spontaneously And It''s "Working To Fix It"', 'https://www.buzzfeednews.com/article/venessawong/amazon-alexa-devices-are-laughing-creepy#.cgggP2j2j', 10, 1, '2025-01-15',   '2026-04-10'),
    (56, 'Is Amazon''s Alexa Creepily Laughing for No Apparent Reason? | Snopes.com', 'https://www.snopes.com/fact-check/is-amazons-alexa-emitting-unprompted-creepy-laughing/', 10, 1, '2025-01-15',   '2026-04-10'),
    (57, 'Hawaii missile mix-up: That was no ''wrong button.'' Take a look. - The Washington Post', 'https://www.washingtonpost.com/news/morning-mix/wp/2018/01/16/that-was-no-wrong-button-in-hawaii-take-a-look/?utm_term=.a2aa65329002', 10, 1, '2025-01-15',   '2026-04-10'),
    (58, 'The Third Industrial Revolution: How Lateral Power is Transforming Energy, the Economy, and the World (St. Martin''s Press 2011) - The Office of Jeremy Rifkin', 'https://foet.org/project/the-third-industrial-revolution/', 10, 1, '2025-01-15',   '2026-04-10'),
    (59, 'The third industrial revolution', 'https://www.economist.com/leaders/2012/04/21/the-third-industrial-revolution', 10, 1, '2025-01-15',   '2026-04-10'),
    (60, 'Privacy error', 'https://projektintegracija.pravo.hr/_download/repository/Kuhn_Structure_of_Scientific_Revolutions.pdf', 10, 1, '2025-01-15',   '2026-04-10'),
    (61, 'Touring Can''t Save Musicians in the Age of Spotify - The New York Times', 'https://www.nytimes.com/2016/01/25/magazine/touring-cant-save-musicians-in-the-age-of-spotify.html', 10, 1, '2025-01-15',   '2026-04-10'),
    (62, 'Taylor Swift''s New Album ''Reputation'' Not Streaming on Spotify or Apple Music - Business Insider', 'https://www.businessinsider.com/taylor-swift-new-album-reputation-not-on-spotify-apple-music-streaming-2017-11', 10, 1, '2025-01-15',   '2026-04-10'),
    (63, 'Chief Defends Spotify After Snub by Taylor Swift - The New York Times', 'https://www.nytimes.com/2014/11/12/business/media/taylor-swifts-stand-on-royalties-draws-a-rebuttal-from-spotify.html', 10, 1, '2025-01-15',   '2026-04-10'),
    (64, 'Digital Medici: How This Musician-Turned-Entrepreneur Plans To Save Creators From Advertising', 'https://www.forbes.com/sites/kathleenchaykowski/2018/02/13/digital-medici-how-this-musician-turned-entrepreneur-plans-to-save-creators-from-advertising/#6063ea771313', 10, 1, '2025-01-15',   '2026-04-10'),
    (65, 'Mark Zuckerberg apologises for Facebook''s ''mistakes'' over Cambridge Analytica | Facebook | The Guardian', 'https://www.theguardian.com/technology/2018/mar/21/mark-zuckerberg-response-facebook-cambridge-analytica', 10, 1, '2025-01-15',   '2026-04-10'),
    (66, 'Pursuing Academic Freedom and Data Privacy Is a Balancing Act | EdSurge News', 'https://www.edsurge.com/news/2016-10-26-pursuing-academic-freedom-and-data-privacy-is-a-balancing-act', 10, 1, '2025-01-15',   '2026-04-10'),
    (67, 'Bloomberg - Are you a robot?', 'https://www.bloomberg.com/news/articles/2018-03-21/paul-ford-facebook-is-why-we-need-a-digital-protection-agency', 10, 1, '2025-01-15',   '2026-04-10'),
    (68, 'Video released of Uber self-driving crash that killed woman in Arizona | Uber | The Guardian', 'https://www.theguardian.com/technology/2018/mar/22/video-released-of-uber-self-driving-crash-that-killed-woman-in-arizona', 10, 1, '2025-01-15',   '2026-04-10'),
    (69, 'Uber calls claims it stole self-driving technology ''demonstrably false'' | Uber | The Guardian', 'https://www.theguardian.com/technology/2017/apr/07/uber-waymo-lawsuit-lidar', 10, 1, '2025-01-15',   '2026-04-10'),
    (70, 'Uber''s Self-Driving Cars Missed Six Red Lights In San Francisco | Fortune', 'https://fortune.com/2017/02/26/uber-self-driving-car-red-lights/', 10, 1, '2025-01-15',   '2026-04-10'),
    (71, 'The Web Is Dead. Long Live the Internet | WIRED', 'https://www.wired.com/2010/08/ff-webrip/', 10, 1, '2025-01-15',   '2026-04-10'),
    (72, 'App Downloads Data (2026) - Business of Apps', 'https://www.businessofapps.com/data/app-statistics/', 10, 1, '2025-01-15',   '2026-04-10'),
    (73, 'Page not found - TechRepublic', 'https://www.techrepublic.com/article/how-progressive-web-apps-promise-to-upend-native-mobile-apps/', 10, 1, '2025-01-15',   '2026-04-10'),
    (74, 'Wait! The Web Isn''t Dead After All. Google Made Sure of It | WIRED', 'https://www.wired.com/2016/04/wait-web-isnt-really-dead-google-made-sure/', 10, 1, '2025-01-15',   '2026-04-10'),
    (75, 'Why Progressive Web Apps Will Replace Native Mobile Apps', 'https://www.forbes.com/sites/forbestechcouncil/2018/03/09/why-progressive-web-apps-will-replace-native-mobile-apps/#3f39b4fa2112', 10, 1, '2025-01-15',   '2026-04-10'),
    (76, 'All-In-One User Research Software | PlaybookUX', 'https://www.playbookux.com/', 10, 1, '2025-01-15',   '2026-04-10'),
    (77, 'Just a moment...', 'https://minervapatterns.com/', 10, 1, '2025-01-15',   '2026-04-10'),
    (78, 'Fastly error: unknown domain www.recode.net', 'https://www.recode.net/2017/5/24/15685870/new-republican-privacy-bill-tech-telecom-lobbying-fcc-congress', 10, 1, '2025-01-15',   '2026-04-10'),
    (79, 'A Tough Task for Facebook: European-Type Privacy for All - The New York Times', 'https://www.nytimes.com/2018/04/08/technology/a-tough-task-for-facebook-european-type-privacy-for-all.html?ribbon-ad-idx=2&rref=technology&module=Ribbon&version=context&region=Header&action=click&contentCollection=Technology&pgtype=article', 10, 1, '2025-01-15',   '2026-04-10'),
    (80, 'Zuckerberg resists effort by U.S. senators to commit him to regulation | Reuters', 'https://www.reuters.com/article/us-facebook-privacy-zuckerberg/zuckerberg-resists-effort-by-u-s-senators-to-commit-him-to-regulation-idUSKBN1HH1CU/', 10, 1, '2025-01-15',   '2026-04-10'),
    (81, 'Mark Zuckerberg Q&A: The Facebook CEO Talks Cambridge Analytica, the Company’s Problems, and Big Data | WIRED', 'https://www.wired.com/story/mark-zuckerberg-talks-to-wired-about-facebooks-privacy-problem/', 10, 1, '2025-01-15',   '2026-04-10');
