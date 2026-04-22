-- NEWS seed from data/quantumData.txt
-- Category mapping used: Quantum Data -> category_id 14

INSERT INTO dailytech.news (
    id, title, url, category_id, version,  time_created,  time_updated
)
VALUES
    (40, 'Dailytech', 'https://ourdailytech.net/', 14, 1, '2025-01-15',   '2026-04-10'),
    (41, 'What Is Quantum Computing? The Complete WIRED Guide | WIRED', 'https://www.wired.com/story/wired-guide-to-quantum-computing/', 14, 1, '2025-01-15',   '2026-04-10'),
    (42, 'Engineering and Applied Science News | Yale Engineering', 'https://engineering.yale.edu/news-and-events/news', 14, 1, '2025-01-15',   '2026-04-10'),
    (43, '18-qubit entanglement sets new record', 'https://phys.org/news/2018-07-qubit-entanglement.html', 14, 1, '2025-01-15',   '2026-04-10'),
    (44, 'Famous Experiment Dooms Alternative to Quantum Weirdness | Quanta Magazine', 'https://www.quantamagazine.org/famous-experiment-dooms-pilot-wave-alternative-to-quantum-weirdness-20181011/', 14, 1, '2025-01-15',   '2026-04-10'),
    (45, 'You''re not irrational, you''re just quantum probabilistic: Researchers explain human decision-making with physics theory', 'https://phys.org/news/2015-09-youre-irrational-quantum-probabilistic-human.html', 14, 1, '2025-01-15',   '2026-04-10'),
    (46, 'Reading Fiction Improves Brain Connectivity and Function | Psychology Today', 'https://www.psychologytoday.com/us/blog/the-athletes-way/201401/reading-fiction-improves-brain-connectivity-and-function', 14, 1, '2025-01-15',   '2026-04-10'),
    (47, 'Growing Up Surrounded by Books Could Have Powerful, Lasting Effect on the Mind', 'https://www.smithsonianmag.com/smart-news/growing-surrounded-books-may-bolster-skills-later-life-180970523/', 14, 1, '2025-01-15',   '2026-04-10'),
    (48, 'IBM Software Exec Predicts Quantum Computers Will Become Mainstream in Five Years - WSJ', 'https://www.wsj.com/articles/ibm-software-exec-predicts-quantum-computers-will-become-mainstream-in-five-years-11558548160', 14, 1, '2025-01-15',   '2026-04-10'),
    (49, 'Microsoft makes quantum breakthrough, plans commercial offering | CIO', 'https://www.cio.com/article/3511493/microsoft-makes-quantum-breakthrough-plans-commercial-offering.html', 14, 1, '2025-01-15',   '2026-04-10');
