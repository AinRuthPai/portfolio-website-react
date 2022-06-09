### 문제점

#### 이미지 슬라이드 구현 시 useEffect에서 current.style이 계속 undefined되는 현상

- 당연히 처음에 useRef는 undefined이므로 계속 일어나는 현상이었고, useEffect 안에 if 문을 이용하여 current가 존재할 시에만 style을 추적할 수 있게 하여 문제를 해결하였다.

- 처음엔 위에 문제를 해결하지 못하여 각각의 양쪽 버튼에서 직접 transform을 주어 translateX 방향으로 이동하도록 하였으나, currentPos가 버튼 클릭 시와 state 변경 시의 싱크가 맞지 않아서 결국 currentPos가 변경되었을 시에 translateX 방향으로 이동할 수 밖에 없었는데, 그래서 useEffect의 deps 배열에 currentPos를 넣어놓은 뒤에 위의 방법을 구상하여 문제를 해결하였다.
