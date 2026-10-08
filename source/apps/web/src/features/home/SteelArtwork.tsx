export function SteelArtwork({ caption }: { caption: string }) {
  return <div className="steel-artwork" aria-hidden="true">
    <svg viewBox="0 0 520 440" fill="none" focusable="false">
      <path d="M0 380h520M0 300h520M0 220h520M0 140h520M0 60h520M80 0v440M200 0v440M320 0v440M440 0v440" stroke="#2b3f52" />
      <path d="m84 290 175 90 175-100-175-90z" fill="#4b6175" stroke="#93a5b6" />
      <path d="M84 290v28l175 91v-29z" fill="#213a50" stroke="#72889c" />
      <path d="m259 380 175-100v28L259 409z" fill="#708394" stroke="#93a5b6" />
      <path d="m84 231 175 90 175-100-175-90z" fill="#60778a" stroke="#a3b2bf" />
      <path d="M84 231v28l175 91v-29z" fill="#294359" stroke="#72889c" />
      <path d="m259 321 175-100v28L259 350z" fill="#7a8d9d" stroke="#a3b2bf" />
      <path d="m84 172 175 90 175-100-175-90z" fill="#8396a5" stroke="#c3cdd5" />
      <path d="M84 172v28l175 91v-29z" fill="#385369" stroke="#8da1b1" />
      <path d="m259 262 175-100v28L259 291z" fill="#a2b0bb" stroke="#c3cdd5" />
      <path d="m118 168 141 73 141-80M118 158l141 73 141-80M118 148l141 73 141-80" stroke="#c3cdd5" strokeOpacity=".55" />
      <path d="M44 82V36h46M476 358v46h-46" stroke="#ae9364" strokeWidth="2" />
    </svg><span>{caption}</span>
  </div>;
}
