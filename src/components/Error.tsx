import OctoIcon from "./OctoIcon";
import style from "./style/error.style";

interface PropType {
  error: {
    active: boolean,
    type: number
  }
};

export default function Error({ error }: PropType) {
  const rate_limit_url = "https://developer.github.com/v3/rate_limit/";

  return (
    <section className={style.errorSection}>
      <OctoIcon className={style.svg} />
      <h1 className={style.label}>OctoProfile</h1>

      {error && (
        <>
          {error.type === 403 ? (
            <p className={style.error_text}>Oh no, you hit the {' '}
              <a href={rate_limit_url} target="_blank" className={style.link}>rate limit</a>.
              Try again later!
            </p>
          ) : error.type === 404 ? (
            <p className={style.error_text}>User not found!</p>
          ): (
            <p className={style.error_text}>Oh no! something went wrong. Try again later!</p>
          )}
        </>
      )}
    </section>
  )
}