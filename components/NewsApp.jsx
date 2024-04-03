"use client"
import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchIndiaTodayNews = async () => {
      try {
        const corsProxyUrl = 'https://api.allorigins.win/get?url=';
        const rssFeedUrl = 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms';
        const response = await fetch(corsProxyUrl + encodeURIComponent(rssFeedUrl));
        const data = await response.json();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data.contents, 'text/xml');
        const items = Array.from(xmlDoc.querySelectorAll('item')).map(item => ({
          title: item.querySelector('title').textContent,
          link: item.querySelector('link').textContent,
          description: item.querySelector('description').textContent.slice(0, 110) + '....',
          pubDate: item.querySelector('pubDate').textContent,
          image: item.querySelector('enclosure') ? item.querySelector('enclosure').getAttribute('url') : null// Accessing media:content with escaped colon
       
        }));
        setNewsItems(items);
      } catch (error) {
        console.error('Error fetching India Today news:', error);
      }
    };

    fetchIndiaTodayNews();
  }, []);

 
  return (
    <div>
      {/* <card> */}

      <div className="container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      {/* <h2>{category}</h2> */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">

      {newsItems.map((item, index) => (
        <div className="card border rounded border-solid border-gray-500 p-4" key={index}>
                       {item.image && <img src={item.image} alt={item.title} />}
                       {/* {item.image && <img src={item.image} alt={item.title} />} Check if image URL is available */}
            <h3 className="font-bold py-3">{item.title}</h3>
            <p className="text-sm">{item.description} </p>
            <p className="py-2"><strong className="bg-red-600 text-white p-1 ">Published on:</strong> {new Date(item.pubDate).toDateString()}</p>
          <button className="py-2 px-3 bg-blue-800"><a target="_blank" href={item.link}>Read more</a></button>  
          </div>
        ))}
        </div>
      </div>
        {/* </card> */}
    </div>
  );
};

export default NewsApp;
