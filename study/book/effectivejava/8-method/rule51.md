# 메서드 시그니처를 신중히 설계하라
API 설계 요령을 알아보지~

* ### 메서드 이름은 신중하게
* ### 편의 메서드를 너무 많이 만들지 말자
    메서드가 너무 많은 클래스는 익히고, 사용하고, 문서화하고, 테스트하고, 유지보수하기 어렵다.
* ### 매개변수 목록은 짧게 유지
    일단 매개변수가 4개를 넘어가면 매개변수를 전부 기억하기 쉽지 않다. 또한 같은 타입의 매개변수가 연달아나오는 경우 특히 해롭다.
* ### 매개변수 타입으로는 클래스 보다는 인터페이스가 낫다.
* ### `boolean` 보다는 원소 2개짜리 열거타입이 낫다
    ```java
    Thermometer.newInstance(true)
    ```
    보다는
    ```java
    Thermometer.newInstance(TemperatureScale.CELCIUS)
    ```
    가 어떤 의미인지 알기 훨씬 쉽다.