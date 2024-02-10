import style from "./style/ratelimit.style";

interface propType {
  rateLimit: {
    remaining: number,
    limit: number
  } | null
};

export default function RateLimit({ rateLimit }: propType) {
  return (
    <>
      {rateLimit && (
        <p className={style.ratelimit}>
          <span className={style.limitCount}>{`${rateLimit.remaining} / ${rateLimit.limit}`}</span>
          <span className={style.limitText}>Requests Left</span>
        </p>
      )}
    </>
  )
}