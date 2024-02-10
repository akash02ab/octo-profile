import style from "./style/ratelimit.style";

interface PropType {
  rateLimit: {
    remaining: number,
    limit: number
  } | null
};

export default function RateLimit({ rateLimit }: PropType) {
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