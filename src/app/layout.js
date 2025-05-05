import '../styles/globals.css';


export const metadata = {
  title: 'LensaNews - AI-Powered Local News',
  description: 'Stay informed with AI-powered local news summaries.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray-50 font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}