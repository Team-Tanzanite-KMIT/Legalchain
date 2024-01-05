import Link from "next/link";

export default function Home() {
    const buttonStyle = {
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        background: 'blue', 
        cursor: 'pointer',
      };
    return (
        <>
   <nav style={{ marginTop: '200px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0' }}>
        <li style={{ margin: '0 80px' }}>
          <Link href="/login">
            <button style={buttonStyle}>Client</button>
          </Link>
        </li>
        <li style={{ margin: '0 80px' }}>
          <Link href="/login">
            <button style={buttonStyle}>Lawyer</button>
          </Link>
        </li>
        <li style={{ margin: '0 80px' }}>
          <Link href="/login">
            <button style={buttonStyle}>Judge</button>
          </Link>
        </li>
      </ul>
    </nav>
      </>
    )
}