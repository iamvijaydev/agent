import styled from 'styled-components'

const Box = styled.div`
    witdth: 2rem;
    height: 2rem;
    border-radius: 1rem;
`

const Wrapper = Box.extend`
    witdth: 2rem;
    height: 2rem;
    border-radius: 1rem;
    font-size: 0;
    vertical-align: top;
    position: relative;
    overflow: hidden;
`

const Default = Box.extend`
    display: ${props => props.loaded ? 'none' : 'block'};
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXr7e67u7vu8PHCw8Pp6+y4uLi9vb2/v7/IycnX2Nni5OXl5+jd3t/a29zFxsbNzc7S09RWjnLNAAAEiUlEQVR4nO3d2ZarIBQEUEVRcf7/r72gnc7Q10SlkENW7Yc8WwtkUk+yjIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiISKrS6jr3G/tK4FTW9mYe6yrXTl6P0zy0X5PTxpubwmbLH2ltYw6lin11/srW1Pmmqkm+Jfsm19sBXVsWJuGGVP1YvY23KubYF3pW27xvvns71kOKfbU09c6ATtMm11XbcX88pzaxr/igYc8N+ERPXeyLPkBNhwPaiGM6PbXcO8S8qNrYV75T15zKZ9V97Gvfpzgb0LZin0BHPdtFVzqBjjp55LMK6RHV7NOCS0Thy5veM5+bF2NneKvzGGV+DZJHG69R5qaWeyuqHhEw103sIJtKRB91EcXOijMmoO2nQhfh3ZsDmYNkbqXUBLkLF4XIRixh+eydaATeif6rmUe1wISogXSlBe6j+hPb+jcErt2gnVTiWFPiporVEDvRqxbbhLmWdhCOHUkdaftEdfAA+DMt7UZE34bi5osWO1e4hLOsSR88GzqNqITKwAPmhayEnmeI/1PHDvUMuHP6TShrugjQhpWs6eL0w5g3CUUduZVMmHzCIPfh9ycUNdIgz9luZM0WCnYY/JAwdqhnAz7hKGrVFmDlrSdZCTt8QmmHwvgdsKzJIsDmohI1lFoDeroQ95i0AwcUd5qYleDDtkrYQZRlsN10lHYbZlkLHU2lnbQtoBsocefBDuZVkx+yjhJvkN1U3jhjKeCU2MgbZxzchCH2RVrUFkrua1+wnb7EgXSFWbrJW7A9gDygEbiceQDYRAl+vdTxf3tP3N7+lffDYMk34er4N11PLTiJvglXPtsoPca++j18nngLXa39cTaiTiXg2e9KkrgHf6j+xMumlcyXu7d0R78t0al8e3h36FNuO8bIXW1vUQc+JdWF9IXMhmFfM2o9pzPEvFDD+KEsRu6KRiRcGCNT5dBUbzJqPc7pfKO+oezmYmupWk3JF29ZKNWZaSwqfSvCs5QZKpq5z1JvvjuVdW0/zNPUjGMzTbPp2+6L4hERERERERERybEcxJi5Kep6rWh9Vl67Mypp5zhKtWYaa61RL7bppRa2aZWQkJ3ZPBD1UxUm/vMad6j9+eD+NJ03cauaq9LAq0X8MZp4d2RpAjbfnc5NpLN/U1yRb8lYxHgCfr6W7imXPyO+qIPeXd1VuwDf/X50ZcFv7Ncju133XqYJM8F/dtErNyG+at7tko+F4DWvjrjiHfAYY8yj0MX4onbRVeCOGqBa0mEhhxsVoODVcSG/GUIWYfURbHXj96cAOOHeJZZwE64C3Ypt7FwPgqzflJA+ugjyFa3/3x4gBXhnGl1SwFOAD9xkNWGIRpTVhLYR0QHRdYK9oevXhCjm5QddZQlezNofuNqZiCX3M3B9l6gb+//DbveFTYYr6JQI/PsRHOh/tYibKxzkfKHAJZIwkN+146vmIyArLYUoZg0AnPPVtU/S9gJuEvH/fAABrP+poP+SAwOsS8+EkTAhEzJhfEzIhEwYHxMyIRPGx4RMyITxMSETMmF8TMiE35LwHytDTZwY5tkJAAAAAElFTkSuQmCC);
    background-size: contain;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
`

const Img = Box.withComponent('img').extend`
    height: auto;
    vertical-align: top;
`

Wrapper.Default = Default
Wrapper.Img = Img

export default Wrapper