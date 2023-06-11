const TrafficLightMachine = Machine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUBOBDAZpglgYwBkcoALAFwDoA7Ae1QFt0AbAYgCEAlAUQEEBpANoAGALqJQABxqwcZHDSriQAD0QBGIQA4AbBQDM2gEwBWIQBZjATisB2S5oA0IAJ6ILu40bNm1es+f9NMwBfYKc0LFxCYnJqOkZWbgBlLmRhMSQQKRk5BSVVBE0bJ1cEbw8vHz8ArRCwkAjsfCJSSloGZgoAVyomWRZkAFUOADkAfQB5EfSlbNl5RUyCtUsbCitLTeNfNW1TAxLEPRMKTTVDbxtzT39tUPCMJujWuI6mCj6yAeHxiYAxP4zTJzXKLUDLVbrTZbHZ7IQHFyIQw2Yz6c4WIKecxCEz3BqPKItWLtBIfWQUKCoMBgKgDACSAFkuBwgZJpPM8ks3DY9OtzqYbIYhFpNn5DmVtEIKNDLN4LkLVqs8Y1CTE2vFOp8KM4wEwmDQAO70pks0Szdmg-KIGxmSzSvQooTGTT2Mx6WXisyS6XQuVmBV2GzKgnNNWvUlaqkQY3M1lZC0LK0IG12ywO0zO13uszi6oUC6bW2ywWrFHByKhl4AI1QNAA1jSWNwAAo8OmmjJsnKJrkIYyGcVnChF11qTR6PQ4oN42gQOBKFWV8jm7uc8GIAC0lnFG90wuFhjUNjH-MsQjL9UXz2JGqYK45YJUR23iIQu1RBbPQksvgMKM05ZPES6pvN0vSyPelq9kUuZjvmhhnto7rmIe04PBW14gRGEHAgma5PggehqGY0r8ucQjaJYBbiiYhgUCmiFnGYdhGIBqovCSmrkpS1KPiCPbroRRikSY5GUdRr5+LoE7HMYcmGO6OhOmxS5YVxlA6nqhqQQJBHaN4+jphoNjaNoNgumonraGow7Qk6FirJOhh3JeIaYeG6kUFGOn4QUVFSiZJjfl6boIQOklmJopwTiY8mKZKxgqe5Nb1jSPmPssKwkS60IotoRSyeKZ4UFoE5qJ4xFnsilihKEQA */
  id: 'TrafficLight',
  initial: "normal",
  states: {
    normal: {
      initial: "unlit",
      on: {
        BREAK: "broken",
        RESET: "normal.lit"
      },
      states: {
        unlit: {
          on: {
            TURN_ON: "lit"
          }
        },
        lit: {
          initial: "green",
          on: {
            TURN_OFF: "unlit"
          },
          states: {
            green: {
              on: {
                TIMER: {
                  target: "yellow",
                  // Additional guard condition required
                  cond: (_context, event) => event.elapsed >= 3 ? true : false
                }
              }
            },
            yellow: {
              on: {
                TIMER: {
                  target: "red", 
                  cond: (_context, event) => event.elapsed >= 5 ? true : false
                }
              }
            },
            red: {
              on: {
                TIMER: {
                  target: "green",
                  cond: (_context, event) => event.elapsed >= 10 ? true : false
                }
              }
            }
          }
        }
      }
    },
    broken: {
      on: {
        REPAIR: "normal"
      }
    }
  }
});