
export default function Card({children}) {
  return (
    <div style={{
      padding:'20px',
      border:'1px solid #ccc',
      borderRadius:'12px',
      background:'#fff',
      boxShadow:'0 2px 8px rgba(0,0,0,0.1)'
    }}>
      {children}
    </div>
  );
}
