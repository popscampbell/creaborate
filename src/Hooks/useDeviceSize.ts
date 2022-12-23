import { useEffect, useState } from "react"

export type DeviceSize = "phone" | "tablet" | "full"

export default function useDeviceSize() {
  const [DeviceSize, setDeviceSize] = useState<DeviceSize>("full")

  useEffect(() => {
    const mediaWatchers: {
      mediaQueryList: MediaQueryList
      DeviceSize: DeviceSize
    }[] = []

    const mediaQueries: { [key: string]: string } = {
      phone: "(max-width: 479px)",
      tablet: "(min-width: 480px) and (max-width: 1023px)",
      full: "(min-width: 1024px)",
    }

    Object.keys(mediaQueries).forEach((key) => {
      const DeviceSize = key as DeviceSize
      const mediaWatcher = window.matchMedia(mediaQueries[key])

      mediaWatchers.push({
        mediaQueryList: mediaWatcher,
        DeviceSize: DeviceSize,
      })

      if (mediaWatcher.matches) {
        setDeviceSize(DeviceSize)
      }

      mediaWatcher.addEventListener("change", updateDeviceSize)
    })

    return function cleanup() {
      mediaWatchers.forEach((watcher) => {
        watcher.mediaQueryList.removeEventListener("change", updateDeviceSize)
      })
    }

    function updateDeviceSize(event: MediaQueryListEvent) {
      if (event.matches) {
        const DeviceSize = mediaWatchers.find(
          (watcher) => watcher.mediaQueryList === event.target
        )?.DeviceSize
        setDeviceSize(DeviceSize || "full")
      }
    }
  })
  return DeviceSize
}
