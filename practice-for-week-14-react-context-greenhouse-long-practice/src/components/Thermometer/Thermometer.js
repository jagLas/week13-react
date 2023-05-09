import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";

function Thermometer() {
  const {temp, setTemp} = useClimate();
  const [targetTemp, setTargetTemp] = useState(temp);

  useEffect(() => {
    console.log('temp change made')

    const tempChanger = setTimeout(() => {
      if (temp < targetTemp) {
        console.log('raising temp')
        setTemp(parseInt(temp) + 1);

      } else if (temp > targetTemp) {
        console.log('lowering temp')
        setTemp(parseInt(temp) - 1);
      }
      
    }, 1000)

    return () => clearTimeout(tempChanger)
  }, [targetTemp, temp, setTemp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={targetTemp}
        onAfterChange={(val) => {setTargetTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;