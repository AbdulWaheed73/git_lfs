function App() {
  return (
    <div>
      <video 
        width="640" 
        height="360" 
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source src="/vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;