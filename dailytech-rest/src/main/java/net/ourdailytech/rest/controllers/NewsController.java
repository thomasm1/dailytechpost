package net.ourdailytech.rest.controllers;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.servlet.http.HttpServletRequest;
import java.time.Clock;
import java.util.HashMap;
import java.util.Map;
import net.ourdailytech.rest.exception.PostApiException;
import net.ourdailytech.rest.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/news")
public class NewsController {
    private final NewsService news;
    private final Clock clock;
    private final Map<String, Integer> requests = new HashMap<>();
    private long minute = -1;

    @Autowired
    public NewsController(NewsService news) { this(news, Clock.systemUTC()); }
    public NewsController(NewsService news, Clock clock) { this.news = news; this.clock = clock; }

    @GetMapping("/top-stories/{section}")
    public JsonNode topStories(@PathVariable String section, HttpServletRequest request) {
        limit(request.getRemoteAddr());
        return news.topStories(section);
    }

    @GetMapping("/search")
    public JsonNode search(@RequestParam(required = false) String q,
                           @RequestParam(name = "begin_date", required = false) String begin,
                           @RequestParam(name = "end_date", required = false) String end,
                           @RequestParam(required = false) String sort,
                           HttpServletRequest request) {
        limit(request.getRemoteAddr());
        return news.search(q, begin, end, sort);
    }

    private synchronized void limit(String address) {
        long current = clock.millis() / 60_000;
        if (minute != current) { minute = current; requests.clear(); }
        // No trust in caller-supplied X-Forwarded-For. Shared proxies may share this limit.
        if ((!requests.containsKey(address) && requests.size() >= 4096)
                || requests.getOrDefault(address, 0) >= 30) {
            throw new PostApiException(HttpStatus.TOO_MANY_REQUESTS, "Too many news requests; try again later");
        }
        requests.merge(address, 1, Integer::sum);
    }
}
