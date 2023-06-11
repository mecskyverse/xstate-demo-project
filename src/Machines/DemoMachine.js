import {createMachine, send} from 'xstate'

export const SamagraMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5SwIYFsVQE4oHQCMVYwBiAeQAUBRAOQGUBBAWQYHEAlBgbQAYBdRKAAOAe1gBLAC7iRAO0EgAHogCMAVgBMuAGw89egOwa1KnioCcAGhABPRBp5aNAFnPmAHAYDMelV+2eAL6B1qgY2HgANiIoEOKyUCSKsJIokmC4KABm6VgAFA56AJQkYZg4uNGx8VC8AkggohLScgrKCM5eWs5qvl5qJpoG2tZ2CA5euAauHu5dKioaGubOwaHo5XhlEWRCYLIkdAAqDOxHdQpNUjLyDe3a5gY6vWbuLtoaXgZWtvaOuC43J4fGZ-EEQiBthUAMYiNBCSJgdIQEipLAwSQXBpXFq3UD3NwAr6aLzmAJedzaFSjRDuFS4GYeFRGZzOHjuVzBCGyEQQOAKKEoS5ia6tO6IAC0I1+CAlalwbkVSuVXjWkI2EQIRDAwuaNzaiGcGhpCE8uDUcy8Kge1qt31VEMFlRicQSutFeKUiC62lw7heize2iNagMJocWmmQO8fQCBjVTsFu327txBoQamc7imixMPA8jgMFnD-yjHhjoICq0dGphcIRSMgqf14tNPEmXmJxg0nmtah+Y3MPFw7M71vMtuZ5gdwSAA */
   
    id: 'samagra',
    initial: 'initial',
    states: {
        initial: {
            on: {
                OPENSAMAGRA: 'loading'
            }
        },
        loading: {
            after: {
                // after 2 second, transition to completed
                2000: { target: 'completed' }
              }
          },


        completed: {
            on: {
                samagraClose: 'initial'
            }        
        }
    }
})