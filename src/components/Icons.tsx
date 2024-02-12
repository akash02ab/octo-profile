interface PropType {
  name: string
  className: string
};

export default function Icon({ name, className }: PropType) {
  switch (name) {
    case 'briefcase': return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1792 1792"
        id="Briefcase"
        className={className}
      >
        <path d="M640 256h512V128H640v128zm1152 640v480q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V896h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45V896h672zm-768 0v128H768V896h256zm768-480v384H0V416q0-66 47-113t113-47h352V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z"></path>
      </svg>
    )
    case 'location': return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="Location"
        className={className}
      >
        <path d="M7.992 2c-2.48 0-4.5 2.02-4.5 4.5a.5.5 0 0 0 .024.156c.041 1.58.725 2.96 1.53 4.242.832 1.323 1.795 2.563 2.413 3.829a.5.5 0 0 0 .895.01c.648-1.265 1.66-2.507 2.535-3.829.873-1.322 1.619-2.75 1.619-4.4a.5.5 0 0 0-.033-.186C12.379 3.927 10.41 2 7.992 2zm0 1c1.94 0 3.5 1.561 3.5 3.5a.5.5 0 0 0 .01.107c-.03 1.308-.636 2.52-1.45 3.75-.687 1.041-1.463 2.116-2.134 3.233-.637-1.112-1.371-2.185-2.023-3.223-.794-1.263-1.387-2.505-1.387-3.86a.5.5 0 0 0-.008-.093A3.488 3.488 0 0 1 7.992 3zm0 2.004c-.822 0-1.5.677-1.5 1.5 0 .822.678 1.5 1.5 1.5.823 0 1.5-.678 1.5-1.5 0-.823-.677-1.5-1.5-1.5zm0 1c.282 0 .5.218.5.5 0 .282-.218.5-.5.5a.493.493 0 0 1-.5-.5c0-.282.218-.5.5-.5z"></path>
      </svg>
    )
    case 'calendar': return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        id="Calendar"
        className={className}
      >
        <path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"></path>
      </svg>
    )
    case 'repository': return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        id="Repository"
        className={className}
      >
        <g color="#000" fill="#000000">
          <path
            fill="#c2dbf8"
            d="M4.5 1037.862h7v13l-3.5-2-3.5 2z"
          />
          <path
            fill="#0070f3"
            d="M4.5 1037.361a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .748.436l3.252-1.86 3.252 1.86a.5.5 0 0 0 .748-.436v-13a.5.5 0 0 0-.5-.5h-7zm.5 1h6V1050l-2.752-1.572a.5.5 0 0 0-.496 0L5 1050v-11.639Z"
          />
        </g>
      </svg>
    )
    case 'star': return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="Star"
        className={className}
      >
        <path d="M21.9189453,10.1265259c0.0802612-0.546814-0.2979736-1.0551147-0.8447266-1.135376L15.4228516,8.164978l-2.5253906-5.1464844c-0.0909424-0.1569824-0.2214355-0.2873535-0.37854-0.3781128c-0.4960327-0.2866821-1.1306152-0.1170044-1.4173584,0.3790894L8.5771484,8.164978L2.9257812,8.9912109C2.7097168,9.0228882,2.5100098,9.1244507,2.3569946,9.2802734c-0.387146,0.3943481-0.3812256,1.0278931,0.0131226,1.4150391l4.0927734,4.0126953l-0.9658203,5.6640625c-0.0091553,0.0541992-0.013855,0.1090698-0.0139771,0.1641235c-0.0015259,0.5534058,0.4458618,1.0032959,0.9993286,1.0048218c0.163147-0.0002441,0.3237915-0.0404663,0.4677734-0.1171875L12,18.7539062l5.0488281,2.6689453c0.1951294,0.1035767,0.4190063,0.1396484,0.6367798,0.1025391c0.5441895-0.0928345,0.9100952-0.6091309,0.8173218-1.1533203l-0.9658203-5.6640625l4.09375-4.0137329C21.7861328,10.5414429,21.8872681,10.3421021,21.9189453,10.1265259z M16.6503906,14.1766968c-0.1170654,0.1148682-0.1706543,0.2796631-0.1435547,0.4414062l1.0097656,5.9208984l-5.2832031-2.7930298c-0.1463013-0.0761719-0.3204956-0.0761719-0.4667969,0L6.4833984,20.539978l1.0097046-5.921814c0.0271606-0.1617432-0.0264282-0.3265381-0.1435547-0.4414062L3.0702515,9.9814453l5.9121094-0.8642578C9.1456299,9.0927734,9.286499,8.9898682,9.359375,8.8417969L12,3.460022l2.640564,5.3817139c0.072876,0.1480713,0.2138062,0.2509766,0.3770142,0.2753906l5.9130859,0.8632812L16.6503906,14.1766968z" fill="#0070f3" />
      </svg>
    )
    case 'fork': return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="CodeFork"
        className={className}
      >
        <path d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" fill="#0070f3" />
      </svg>
    )
    default: return null
  }
}