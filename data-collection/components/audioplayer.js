
const audioplayer = () => {
  return (
    <div>
      {/* <audio src="link to s3 bucket "></audio> */}
      <button>back 30</button>
      <button>play/pause</button>
      <button>forward 30</button>
      {/*current time*/}
      <div>0:00</div>
      
      {/* progress bar */}
      <div>
        <input type="range"/>
      </div>

      {/* duration */}
      <div>2:49</div>

    </div>
  );
}

export default audioplayer ;