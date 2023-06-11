import {createMachine} from 'xstate'

export const SamagraMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5SwIYFsVQE4oHQCMVYwBiAeQAUBRAOQGUBBAWQYHEAlBgbQAYBdRKAAOAe1gBLAC7iRAO0EgAHogCMAVgBMuAGw8AzNo1qVAFgCcADmN6ANCACeiCytxm3bjdpVmA7L7MAvgF2qBjYeKGYOGRCYLIkdAAqDOyJvAJIIKIS0nIKyggmPjy4PhY+mio81c4aJnaOCM64atXV6q1GevpBIehReFgArrKy4rJQJJIoWDCS6QrZUjLymQXaFia4bdUafhp6ambaDU4urW0dPF09vSCyIhBwCpHhi2LLeWuIALQnDr9tNsdiZDioVBU1D5tHdXjgCEQwO8cit8ogTBpTk0XO4PF5-GULLD+uFcHCUDE4sjPqtQAU9BoXFZdjUeNoTDxQVjmrizJ5vH4ympiWF4cNRuMoNTcrSlIgoUCiq0VHp-CYLDwzNycbj+QSLETgiBybgAMYiNBCAA2YEkkGlqO+CEJuCq7Q1ug0x3qAOxrl1+MFFg0QSCQA */
    id: 'samagra',
    initial: 'base',
    states: {
        base: {
            on: {
                OPENSAMAGRA: 'samagraOpen'
            }
        },
        samagraOpen:{
            on: {
                START: 'running'
              }
        },
        running: {
            on: {
                target:'completed',
                cond: (_context, event) => event.elapsed >= 3 ? true : false
            }
          },
          completed: {
            on: {
                target:'base'
            }        
        }
    }
})