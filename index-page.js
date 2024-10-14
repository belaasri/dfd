import Head from 'next/head';
import YouTubeDownloader from '../components/YouTubeDownloader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>YouTube Video Downloader</title>
        <meta name="description" content="Download YouTube videos and convert to MP3 for free" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <YouTubeDownloader />
      </main>
    </div>
  );
}
