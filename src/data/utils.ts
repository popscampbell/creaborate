import { cloneDeep, isNull } from "lodash"

export
  function defaulter(src: any, def: any) {
  const res = cloneDeep(src)

  Object.keys(src).map((key) => {
    res[key] = isNull(src[key]) ? def[key] : src[key]
  })

  return res
}
