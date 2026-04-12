-- NEWS seed from data/aiNow.txt
-- Category mapping used: A.I. Now -> category_id 12

INSERT INTO dailytech.news (
    id, title, url, category_id, version,  time_created,  time_updated
)
VALUES
    (123, 'Dailytech', 'https://ourdailytech.net/', 12, 1, '2025-01-15',   '2026-04-10'),
    (124, 'Just a moment...', 'https://onlinelibrary.wiley.com/doi/full/10.1111/insr.12016', 12, 1, '2025-01-15',   '2026-04-10'),
    (125, 'Classification and Regression Trees | Leo Breiman, Jerome Friedman, R.', 'https://www.taylorfrancis.com/books/mono/10.1201/9781315139470/classification-regression-trees-leo-breiman-jerome-friedman-olshen-charles-stone', 12, 1, '2025-01-15',   '2026-04-10'),
    (126, 'ML Kit Google for Developers', 'https://developers.google.com/ml-kit/', 12, 1, '2025-01-15',   '2026-04-10'),
    (127, 'Frankenstein | Project Gutenberg', 'https://www.gutenberg.org/files/84/84-h/84-h.htm', 12, 1, '2025-01-15',   '2026-04-10'),
    (128, 'CUDA Platform for Accelerated Computing | NVIDIA Developer', 'https://developer.nvidia.com/cuda', 12, 1, '2025-01-15',   '2026-04-10'),
    (129, 'New Chips From AMD, Intel, and Qualcomm Make PCs Exciting Again | WIRED', 'https://www.wired.com/story/computex-2018-new-chips-qualcomm-amd-intel/', 12, 1, '2025-01-15',   '2026-04-10'),
    (130, 'Deep learning | Nature', 'https://www.nature.com/articles/nature14539', 12, 1, '2025-01-15',   '2026-04-10'),
    (131, 'ImageNet Classification with Deep Convolutional Neural Networks', 'https://papers.nips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html', 12, 1, '2025-01-15',   '2026-04-10'),
    (132, 'How Computers Could Make Your Customer-Service Calls More Human - WSJ', 'https://www.wsj.com/articles/call-center-agents-get-a-human-touch-1528984801?mod=foesummaries', 12, 1, '2025-01-15',   '2026-04-10'),
    (133, 'The "Iron Cage" and the "Shell as Hard as Steel": Parsons, Weber, and the Stahlhartes Gehaeuse Metaphor in the Protestant Ethic and the Spirit of Capitalism on JSTOR', 'https://www.jstor.org/stable/2678029?seq=1#page_scan_tab_contents', 12, 1, '2025-01-15',   '2026-04-10'),
    (134, 'Opinion | Why Are So Many Political Parties Blowing Up? (Part 1) - The New York Times', 'https://www.nytimes.com/2018/06/26/opinion/political-parties-climate.html', 12, 1, '2025-01-15',   '2026-04-10'),
    (135, 'One college prepares for automation with free classes forever - The Washington Post', 'https://www.washingtonpost.com/news/wonk/wp/2018/06/06/in-the-future-college-never-really-ends/?noredirect=on&utm_term=.4d7810952eb7', 12, 1, '2025-01-15',   '2026-04-10'),
    (136, 'AI Tips Off Regulators to Possible EU Data Privacy Faults - Bloomberg', 'https://www.bloomberg.com/news/articles/2018-07-04/new-ai-tips-off-regulators-to-possible-eu-data-privacy-faults', 12, 1, '2025-01-15',   '2026-04-10'),
    (137, 'Can This Startup Break Big Tech''s Hold on A.I.? | Fortune', 'https://fortune.com/longform/element-ai-startup-tech/', 12, 1, '2025-01-15',   '2026-04-10'),
    (138, 'Join AI Pioneer Geoffrey Hinton in Toronto, and Learn from Global Leaders in Deep Learning - Benzinga', 'https://www.benzinga.com/pressreleases/18/06/p11846924/join-ai-pioneer-geoffrey-hinton-in-toronto-and-learn-from-global-leade', 12, 1, '2025-01-15',   '2026-04-10'),
    (139, 'TensorFlow.js | Machine Learning for JavaScript Developers', 'https://www.tensorflow.org/js', 12, 1, '2025-01-15',   '2026-04-10'),
    (140, 'The AI revolution has spawned a new chips arms race - Ars Technica', 'https://arstechnica.com/gadgets/2018/07/the-ai-revolution-has-spawned-a-new-chips-arms-race/', 12, 1, '2025-01-15',   '2026-04-10'),
    (141, 'Turn your dancing into an AI-powered GIF with Google''s fun Move Mirror experiment | London Evening Standard | The Standard', 'https://www.standard.co.uk/news/tech/google-move-mirror-dancing-gif-a3892471.html', 12, 1, '2025-01-15',   '2026-04-10'),
    (142, 'AI is seen less of a threat and is welcomed by health professionals, research reveals | Healthcare Digital', 'https://healthcare-digital.com/technology-and-ai/ai-seen-less-threat-and-welcomed-health-professionals-research-reveals', 12, 1, '2025-01-15',   '2026-04-10'),
    (143, 'Causal Inference in Sociological Research | Annual Reviews', 'https://www.annualreviews.org/content/journals/10.1146/annurev.soc.012809.102702', 12, 1, '2025-01-15',   '2026-04-10'),
    (144, 'A review of the application of propensity score methods yielded increasing use, advantages in specific settings, but not substantially different estimates compared with conventional multivariable methods - PMC', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1448214/', 12, 1, '2025-01-15',   '2026-04-10'),
    (145, 'Bots vs. Trolls: How AI Could Clean Up Social Media - WSJ', 'https://www.wsj.com/articles/bots-vs-trolls-how-ai-could-clean-up-social-media-1533849001?mod=djemCIO_h', 12, 1, '2025-01-15',   '2026-04-10'),
    (146, 'Apple''s Latest iPhones Are Packed With AI Smarts | WIRED', 'https://www.wired.com/story/apples-latest-iphones-packed-with-ai-smarts/', 12, 1, '2025-01-15',   '2026-04-10'),
    (147, 'Machine learning - Is the emperor wearing clothes? | HackerNoon', 'https://hackernoon.com/machine-learning-is-the-emperor-wearing-clothes-59933d12a3cc', 12, 1, '2025-01-15',   '2026-04-10'),
    (148, 'Page not found | Towards Data Science', 'https://towardsdatascience.com/selecting-the-best-machine-learning-algorithm-for-your-regression-problem-20c330bad4ef', 12, 1, '2025-01-15',   '2026-04-10'),
    (149, 'JPMorgan Invests in Startup Tech That Analyzes Encrypted Data - WSJ', 'https://www.wsj.com/articles/jpmorgan-invests-in-startup-tech-that-analyzes-encrypted-data-1542138443', 12, 1, '2025-01-15',   '2026-04-10'),
    (150, 'The rare form of machine learning that can spot hackers who have already broken in | MIT Technology Review', 'https://www.technologyreview.com/2018/11/16/139055/the-rare-form-of-machine-learning-that-can-spot-hackers-who-have-already-broken-in/', 12, 1, '2025-01-15',   '2026-04-10'),
    (151, 'iPhone Suppliers'' Poor Forecasts Make Everyone Very Nervous', 'https://nymag.com/intelligencer/2018/11/poor-iphone-supplier-forecasts-make-everyone-very-nervous.html', 12, 1, '2025-01-15',   '2026-04-10');
