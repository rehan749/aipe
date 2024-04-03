"use client"
import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';



  

const News = () => {
    const [allNews, setAllNews] = useState([]);
  
    const rssFeedUrls = [
    //   'https://www.indiatoday.in/rss/home',
      'http://search.yahoo.com/mrss/'
    //   'https://example.com/rss-feed-url-2',
      // Add more RSS feed URLs here
    ];
  
    useEffect(() => {
      const fetchRSSFeeds = async () => {
        try {
          const parser = new Parser();
          const allFeedItems = await Promise.all(
            rssFeedUrls.map(async (feedUrl) => {
              const feed = await parser.parseURL(feedUrl);
              return feed.items;
            })
          );
          // Flatten the array of arrays into a single array
          const flattenedNews = allFeedItems.flat();
          // Sort news by publication date if needed
          flattenedNews.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
          setAllNews(flattenedNews);
        } catch (error) {
          console.error('Error fetching RSS feeds:', error);
        }
      };
  
      fetchRSSFeeds();
    }, []);
  return (
    <div>
      <h2>Updated News</h2>
      <ul>
        {allNews.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  
  )
}

export default News
