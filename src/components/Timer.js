import React from "react"
import { useTimer } from "react-timer-hook"

// this is currently unimplemented but could be used to lock out of questions
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

	return (
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
