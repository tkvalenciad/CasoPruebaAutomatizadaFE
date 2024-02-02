Feature: Buscar en Google Simetrik

  Scenario: Buscar "Simetrik" en Google
    Given un usuario abre el navegador de Google
    And busca la palabra "Simetrik"
    When le da clic en buscar
    Then el total de resultados es diferente a cero