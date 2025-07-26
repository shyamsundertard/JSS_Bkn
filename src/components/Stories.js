export default function Stories() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen text-tertiary'>
      <div className='bg-primary-light shadow-lg rounded-lg p-8 text-center'>
        <h1 className='text-5xl font-bold mb-4'>हमारी कहानियाँ</h1>
        <p className='text-xl mb-6'>
          प्रेरणादायक कथाएँ जो हम सभी को जोड़ती हैं।
        </p>
        <p className='text-lg'>
          उन कहानियों के संग्रह में गोताखोरी करें जो अनुभवों और उपलब्धियों का जश्न मनाती हैं।
        </p>
        {/* <button className='mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
          और पढ़ें
        </button> */}
      </div>
    </div>
  );
}
