import React, { useEffect, useState } from 'react'

export function ColorPicker() {
  const [hue, setHue] = useState((Math.random() * 360).toString())
  const [sat, setSat] = useState((Math.random() * 100).toString())
  const [light, setLight] = useState((Math.random() * 100).toString())
  const [alpha, setAlpha] = useState((Math.random() * 100).toString())

  var colorString =
    'hsla(' +
    Number.parseInt(hue) * 3.6 +
    ', ' +
    sat +
    '%, ' +
    light +
    '%, ' +
    alpha +
    '%)'

  function updateBackgroundColor() {
    var colorString =
      'hsla(' +
      Number.parseInt(hue) * 3.6 +
      ', ' +
      sat +
      '%, ' +
      light +
      '%, ' +
      alpha +
      '%)'
    document.body.style.backgroundColor = colorString
  }

  function randomColor() {
    // to set random color on load
    setHue((Math.random() * 360).toString())
    setSat((Math.random() * 100).toString())
    setLight((Math.random() * 100).toString())
    setAlpha((Math.random() * 100).toString())
  }

  function handleHueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setHue(event.target.value)
    updateBackgroundColor()
  }

  function handleSatChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSat(event.target.value)
    updateBackgroundColor()
  }

  function handleLightChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLight(event.target.value)
    updateBackgroundColor()
  }

  function handleAlphaChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAlpha(event.target.value)
    updateBackgroundColor()
  }

  updateBackgroundColor()

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <p>{colorString}</p>
      <div style={{ position: 'absolute', top: '40%', left: '40%' }}>
        <div className="slider">
          <p>Hue</p>
          <input type="range" onChange={handleHueChange} />
        </div>
        <div className="slider">
          <p>Saturation</p>
          <input type="range" onChange={handleSatChange} />
        </div>
        <div className="slider">
          <p>Light</p>
          <input type="range" onChange={handleLightChange} />
        </div>
        <div className="slider">
          <p>Alpha</p>
          <input type="range" onChange={handleAlphaChange} />
        </div>
        <button onClick={randomColor}>Random Color</button>
      </div>
    </div>
  )
}
