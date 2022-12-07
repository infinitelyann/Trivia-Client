import React from "react"
import { useTimer } from "react-timer-hook"

// this is currently unimplemented but could be used to lock out of questions,// V3+ should be in other branches and not deployed - more comments in here would be a great place to start 
const Timer = (props, {expiryTimerstamp}) => {
	// const { msgAlert, user } = props
	console.log('props in timer', props)
    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        restart,
        resume

    } = useTimer({expiryTimerstamp, onExpire: () => console.log('done')})

	return (// bad indentation throughout, shouldn't use a fragment her because they don't get beocm ea part of the dom, should have been a div or other semantic element
		<>
			<h2>Timer Page</h2>
            <div style={{fontSize: '100px'}}>
       <span>{minutes}</span>:<span>{seconds}</span>
      </div>
            <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 1 minute timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 59);
        restart(time)
      }}>Start Timer</button>
		</>
	)
}

export default Timer
