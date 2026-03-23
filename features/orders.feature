Feature: Orders
  Scenario: Order becomes READY
    Given I create an order
    When I wait for the order to be ready
    Then the order status should be "READY"
