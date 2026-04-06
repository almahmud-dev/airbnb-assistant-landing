"use client"

export default function Error({ error, reset }) {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}