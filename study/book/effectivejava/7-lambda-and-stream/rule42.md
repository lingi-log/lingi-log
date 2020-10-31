# 익명 클래스보다는 람다를 사용하라
자바가 8로 판올림되면서 작은 함수 객체를 구현하는 데 적합한 람다가 도입되었다. 익명 클래스는 (함수형 인터페이스가 아닌) 타입의 인스턴스를 만들 때만 사용하라. 람다는 작은 함수 객체를 아주 쉽게 표현할 수 있어 (이전 자바에선 실용적이지 않던) 함수형 프로그래밍의 지평을 얻었다.

## 사용 시 주의사항
* 타입을 명시해야 코드가 더 명확할 깨만 제외하고는, 람다의 모든 매개변수 타입은 생략하자.
* 람다는 이름이 없고 문서화도 못 하기 때문에 코드 자체로 동작이 명확히 설명되지 않거니 코드 줄 수가 많아지면 람다를 쓰지 말아야 한다.
* 람다의 this 키워드는 바깥 인스턴스를 가리킨다.
* 가상머신 별로 다르게 구현할 수 있기 때문에 람다를 직렬화 하는 일은 극히 삼가야 한다.