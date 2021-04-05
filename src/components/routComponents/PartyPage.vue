// СТРАНИЦА ИССЛЕДОВАТЕЛЕЙ // В разработке

<template>
    <div v-if="loadSuccess">
        <PartySection :title="this.HEADERS.TITLE[0].title" :sectionData="this.RESEARCH_MEMBER.RESEARCH_MEMBER || false" />
    </div>
    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import PartySection from '../unitComponents/PartySection';
    import Preloader from '../unitComponents/CommonElements/Preloader';
    import mixin from '../../utils/methodsMixin';

    export default {
        name: 'PartyPage',
        components: {
            PartySection,
            Preloader,
        },
        props: {
            pageId: String,
        },
        mixins: [mixin],
        data() {
            return {
                partyData: [
                    {
                        title: 'Российский государственный аграрный университет - МСХА  имени "К.А. Тимирязева"',
                        img:
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAABKVBMVEX///89dkgAAAAgFgA1ckE+eUo6dEUobDYvbzw3c0MrbTkzcT8kajNcWFP5+Pizsa0MAAAeEwAvTSzq6ugcEADOzcq5t7SXlI6npqQSAADFw8Hy8fAYCgDb2tfw9PEZBADO2tApIBKfnJhJflOft6ONioVzbmhlYV19n4NVT0bm7OerwK/a49y/z8KCf3pFPjWNqpJwlnfH1crh4N5VhV4+NypijWowJhGWsZuHpo01LB1dimUsJBi0xrd1mXsYZio4LyApOR42YjpAOS0eBQBNRz4AYR9FbEd6dnExKBMiHghRbVEnUypthmwMURZefWCVpJMvZDYsHRR4fnMmLhYPDgAfWyd7jHlAVT0kTCMcUiE7MCs/QTAeOBQUFwAXOg0PQg0HJwAAWgy4orSsAAAgAElEQVR4nO19CXvjyJFlEgRxC5LMQ+KFggiQBHGIp1ikWCTlUqks1/jqXm/P2N4Zz/r//4iNyMTFA5TIUlX3ehzf19UpEEc+ZGTEi8hEJiH/kn/Jq0Q3/NHSHjjDiVXgJVETJblgTYbOwF6OfOPnrt3Xiu4vZ0NLFkVFUnleFgQhxwRKMs+rkiKKwmRlB/7PXdOTxDDtoQBNpsoRriwReFURNWvl+frPXeljZDSbSIoqvwBuE6ksifzCNn/uqr9KfG+qKfxLjbdfZFVUVkv354ZwWPyZJUqn4YsErNLE+8XC9Gc5UX0RYGJ4sk+RtIn9C4RpeJNMgLIMFhRMKBhX1kfBpsKfiiLxWUotSOI0+LkxbYq52quiAoATtcLCmS0D03eNxHAahuubgTdYTVQNoO4zT4Kizn85PmVpifxuFaGpctNZ8KJHMMzlYCGI0p4m5cXp6LsgeEGMGb/ThIBPmwyC7S5luK7vm6bp+667zW/c5dzSdnEKouV9LyRZYsxFdbcrWYNRSi190MmhpSp8zpospsPVcLqYWDle4a3hwEuzOSNwcjs6L0iq/XMgiys1V7aUVJa0aeLgfNBCTZzO7cA0jG2d1Q3XDGxnsZZAo5NLvIm2DVPifzaU+kzbRIjGcBk1i2kvQF+XryBohumBng69yMC4aKK3UEo/j8Z6/GZFZLEQOTUXuM7wOP4J/HYqDiMVcGeSsmlrFev7W59RTtmog6o4JvvFH4gTe9voIwRrOkuaylkMbXPb8JiDnBC9p2C6aawFcfF9PYkxFNN9RlAkm9XXn4uT5VbV/eV8ogBFB2+pTV16tSbJQAwUBZV582TXLggzBtOdb/ZMQZt/B2iReJq88YYnS3rYsJXFNkBW1/h0XhsRM+nGvDbfPd/wLMujeq7bOSWNUlW/F/fxJ2k1lcWwp4wW69kekml4S+JayTvRTD0X1Zu3DLL09qQC/Lm2Yg3syRsoxeF3SRzY6UaENqQIdU+Z7BoFY0QcTVIsl0ySa0TD10KIU+IXFAlUcLRb88CyWKMtc1IKJK98+6Z0F+lGlAoUmDFYr3YNgutoNlFoR/JJkg6Qp8ShyirkiK/hYYnMtMEuSn8YegxPSVtwcfWN8wVLMdWIquoxhJ/31lDjJU+nbSAohi8mlRwZ9A/RZ//P8cSWVM3ZVXRjrtEn6IO07vCy+S0hOklNc7I21+nz15sIDTMITGKuoVbQDqwFpEnYdhSxRQbwBz8nlhRhhNP4tU/80WjTqwJKynHctCEXtG/He1wrpTPKhGqnt4nQn1kahIoMRU6dERn5nQJBkqEllwb4h2YQ3xElGXWWnW0TWVREbbERHwMjpj1wlO6WyvQb6WuQoh68QpUokDbsnDllcbLmMx3lVwSCieGSVmieNCS0qgz4EcFyKGkLMqV3lsGt4P8kcZju3e7Uon8OUk3J574JIbCThoD3iNDciZV+Erh2VgnRjqyKRUBto6qmeqTpa0r0cnQzIBa9UB2QGbNovOZsvLuCg6/Jt5KmFLTl20NcJfZUFmkj2usNohw3swK+IPIOITxvPpmQVdyQ8pBMHGJN5iE/NcI+oJlkFcLgVTN9c1ujCjvQkqbUZm+M0JgkXVGaYM18dUNNff1z1EjAuMzwhYgupS0Y/Gq+mTSkZixNUxR4SaOMJjK6IuAahpcKn8mGkiwm+DhTSEissnpbiLmUD6escQbvPP0KZiRqC7R5+mee5xWFV0YkCKNe3iExv0FjRFb0loKE58CZosRLn/FeAwZYKJDBJP0WgzVqpz5M9EmdvKHlcZOkkkCtnGsN07f3VXVIhjJVY8Z2sHKGOV/bZBIBU3Qv6U4yMaJWlSdktp6PIIbWGaSAKqTskKkqbzYltaZ2oq/IBd9IfDF1V9TT5XqDUC3hqQo0BrTxNAw/Atv2AoMYMwadtr9hJE0A7iPGuCLgfozAs5ejMOBAQgzNK4Jl2XiQR5XHTHKcsvBGaVgzgShN8YBT2Hh9S41WmiiSRG3dyOFFSVUlZb0iS3gfqsrDX5oTqSdVhwmBAAt+4VV4X0v4Q5HgCi03NxkYVSJLbPbNt+lK2BMMK7Fe/JuANBOfIQ7wOYKT/IiGf4Y9UV6QwYAiLsR0T/TJ2iCBPZvPbIgTR6af3AoorLmEX+azANQ2fojAM5JvODPG44EYjNIwhgvU16RTCuIbOMq0NURfYa4Tx+Q6YBjBn4eACFWzeIwRPUHaMk2HqfCDHyY/jKCNg7iXCaHCM2MLjE/VCiku5WkIeRC/LUH96pZMvXpqTpbr+L0ZKwh2QXmsyG6i7UvUGnruXEnlmnxNc0epF5a8f1tVZsQXYu/E0yfFNGKgCqo2iG2cuR5RqDFI6StBJuGCQCs1F+I3GkhYCdGIGhr4ZxA/WNZAcYcSNkPgLCzLGgBfA1OZNCTwgLllTRbzESqCAm/ISfID0PwRvxV9F0tqzowe7FIeGazjmn1dn3RjcyPwCHE6jX+aaWHr2RIdC+aVQURJBVVcucSUedpNV4osCGsDe5zmbvRIdy0IMqBD96IWfBqOsd/UORlIPPVYoAnUNAspVjVBF52YQjn3FS7EyCUQ8V1NEmvjKFHjGRArWPPZYCjpgECQVTGHgcOSqi3EFBg3AflDjRbAMCXWYkLZKcSg9CEC9nN3oIo4HqD5xufFfLCSRQl4rcteTCqimmJFEpcmW6djjNMwggy11q1B/MucVZUS1yBK/I/IYF0YhnlH8zPlN5IeSMhg59T/KzYqcCgS/UMKDIm2/WeTXTeYyusBCVjTGB4+YSZtg1yhyfJj+8Yn+nWkTKP+Qbu1nhp3WGobtw7mk1xuQBZwUnK161nICoyRCGYzvCAHPn0eW1BtRIaiOMKep1heygcYRJ+SgWUtZgx3RJZSjGC+IGmDKKX82TEyj944VVSdj/uDEb5YgUdIxkBUeEHQRnrYY4yRPXAGWOelKmiGWQggkuaRB0gK+gVzig4f/T84eE81DU1Ql5iGnQ1mXphXtjUguqj3bKgjJEVSKtQYIMjEsYknpQaW8fXUosrJTRY+Y2XUJYYJJTAuYHzwsoWiQPV5SRQ8iPhoS9vD+WA2s71lmH9zR0vbns0G8yGl2RbYM6+Aw8yqJEp0/FhWvNAnSTSnyjiCaPiJW51PSZqgaCeMFSR6gH5czyUQZ9qQ2Ep4PMq1ai7gBkJnJUktIexhr5HR54SDagukcXxcAxFxoVvC3qwl1pWCXMbVFI/2IEY83EkDbiuBCK8OYo+JrAACN4q5sGvJaCrt2JMfF6mnogmV0greid2tiuFFoEGAAhwixR0cDCDtmNsfbVwXUXMoiG6YjDTomClVDQNb0Y0MG8ChvRdsfkQ8Res4Imla8c102s2gh0VkRi7o6PRdnafEJ5YpGvrYbKjDzJvvFTtyYyoarHnKNNOMhcwOsB5DY8pZxC6HNBMnTo5PZwcWzXgBAWIMGNTSC1sXmhBNHU1tSYkHI3QgPTb/4lEpnrgr05vbaS1gz1fQws2ZXvICtFiBTc6QwYRqwvDESUS+PZU04AJ4XzCq8FhTYvpELSpLaPHpsEcFS6MXIjU/qktGmXtBNTAsiL3eaErCYB5clbFmjUhzZubcWfAKkFp9ZzrDceL6qKqSNBmuTPjTmLL+to7ZMASpThIXrN1Uxu+YLhln0GinW0dvx5hqaxa54k8uWfA5QZFTNnvJ82+R9jRVaZmQiSUmhPhJjAR+W2txW5oKIUkskNbjwxJlDpm9kaKehXojMcMpSEBSDd3S2NiS4TkT2Rq+ZcYzcCbWdMAYnZfTLN3Ayb2UHXpEBAofvXgPuUBsd7TXvuPI/Mt4+TB6NSb0f3AOcDtBWyxd3UBugj9AuIATawS18IYYJVUQBF5R2EiPCc1pGL5nAQ2HtgJbJygRmhVW0Io61yu1NR59keAtepPwKI0kob9D403h9qZnmNRW66toTGkjG/m1EmehwwHylanjbOURcGCD5oWS+F8wU11SelVmObapmGV015EFoWZIGSHXJvpAUtZusAZV9uOk7hsPJg3iWmMq0F6P3LWIZAvHqgMl3WTuWkdKGdX6NdoaWWIeWURsURyqwAote5qaoz1zPSLTULEF7a1n0MTjK+qUmGvaCwWJGQdG0WMDs8Q+NQ21SZhk3zKSONGLbmMe2S/GHWWafV+FWgtUCAJYFkar0ttPnwlYVkCQdYgwgRnQzKVGgTFAsTuceiltFV9kH3GeF0/1xegwy8NQq7VQmUogawOHhOhV7dU2+xgxaIYHHooWJUoc0VEOVpQj+qVjj4q0VZBfum9kcGQ0KLwZHmX3FPCeQwqRH7JxUdCXuaYMjuEXV0ec6zsavD4arQJTX1CVUdAIsaA59hTBJD7GBlMO3jQ2OPBmBs7mYTSc4QAhhFJhksU3guNGVrijzjY8PayTGBdAMwNxAyOZLlN11w6/8mh0Ak2wq0VH55RJoGqE94Hmc1SZV3mB+tCj5N2xFyxkAT+AUeeh4aP9EDsPmLmoyQzU1pA/bzDaXYlehSDAH3HoYH62cdwGb818LTJ1V1kM7Nn0+BxD49gLBuuJM3CstRk/fkFrinHJ56glPeimuvKahlwIicEJYsqwksH3mThuy/LcgnIy7davO9XO+ZHDhuxpdLQ87CAmNBqE5Z7Gx4EtMuXI7MgHIskoVU8jqljZ0RuJDsF3MxWiR+DwVEERjwR7zXHVfJXjKsddZhQKkwF7qBZh0F1KE6TofZnIJCNKd4C2Rs2IIOxYqanHlBZG6HsFCnGZw2Rc7ri6XnOXeZRL7vy4C+FR4YAWy99QRZpiq0lxIIBmJxBfash4gGwRuhwmzMvzEkArqDmax4GoDg+qx7nFMZcP5ZIrHnUlHWQQNHSNOMDFCzGJlGNa4yIJixsyq0dGRhUp3yypfugyBeyQKw0nPERj59pxqtqpRhjzF+2jrgxHA2jyyoegwIhzXKkxvpWX9LYs0xqNUaGPMOJmNIzwAYKyHhpsoD/M2R2XPwHPeBljLD0cd6nH6ibTEWwX9OhzOH1XS+aeGejrooGxDEsRURycQTKPXIKvzJgCSDhN1aaoQoU4Nv9ei1UVhCsfdzGjVyykJYEN3ECmwbpFZvHEh7kXhiS5LLITTUJA4m6sw4Ouwi8oGcbIyfPdzw5OkWMQj0z1kXwphbF0c+TVE9YCON7gfHbdAL0HjRKAP4cgaUNGQ23qvptEAQdOgrXD3ohThlXMAIIzCiS4v6ZCNEfTnsqxEMn9Bsa7I6/W6SwoeNWupWrwngsmKjD8LWGyh8kK1GyZgrEjUbIUXX/UG5EdaTiWOMIReKDFGk2mmgD6+EgDMF5GcjxGtHc4lQWnrAFGFQPWJRAwqFIc/LsS/BN2yH0kMxoCwhH8ZdjTKK1g8RX1tx7eECeq+fIJ4eJ96fLmA5ObyxMwgm80WeSsUaWDNsSm0FKuAj9Bm6mJd9gSJ8rKwHXRxEnqTOi8Pqae0QTi075ByJeqtTaTWvXo/oiikzmLN4yAjjxQdVRTrsKcxH4mx+9omh45jhV6IHaMnk111w2HxkZhZHVSXqPMNVocd9d94LhW41i7yiQcAFFMFvVTB0FzM5GrUNwk6yFtXx3ZXHQcq9Dv0VZngTGddVDAuBi/QH11FnNTEGObXJM2YjzpDqYm4sxlMAxq7OkX4cwIKmgsIyhIyDYk5DjYanrkOGhgjU3O6D64nIUoOqZBTgw7ECPNA5yMERlJMBSVSTiFBPshLUUWhjq90H3IW/7bSLlOL+xuLNJH0ruKszk2cIxkavHxGO/1a4g58idjJL6JX3TpySys0FlEYzIr6KODkMzwm5emRjHIJNREMxoQZ2DZq3KH2skJKmxH5OLj09sRHH/4+RLL3oiRQ8A+hjKaJqR0y0WmVNWNknH084WcHCk4neBli/KLOaFMQYwfasXah6/ACG2k0iTrklZKGRGdWo115MzQtYfKukXMQ3uLUyftEIKBH1YJaGdp29PcLDXd0qljN9SuUjkdI2VjNCVPgeD7Bjuqgr8OlXW+TFzkBp9Lz/8uhKq6BLLmCTh/lBpjmpQTI30+DWP1qsXkqnpyf9Qi50VTAhgMLzWcczoPFRNdZDw/PW3/w15KVVUIj81EGbM6OlN9aR7F0PIrku17pVvNX0SSrz6feBcrzqziKCkNIGydjKx4uEVJlHXja+2Qq6Kf8CKLsuIFxaJqORRlHpkAu/LlXHuGnFVTnLzRO/EurB9SH8cLgkJT5aOJKMSdzwmSsD7VHNFYAXrNqRkexNYTFBk/UF1OcdqsLW1fd6RsxI8n34W1h4JJ4wJOqdE9Oico5uDBKkUDEk8ek5wUASCRxxSHo/SBEzlOvf/01EjHVk9P/fpJd2I9RggHdE1HCTMCkTfUNfwvxJiEDlF3hIY347BwXUABkItRgAMa7Isy6dRRxisuDRGUlTtm4CMtA8rC0fIZdrCM5s8X4sZB/x5OL0q5OSvpojNG/Mq12r/97ne/+wjy+2az+Zs//LHWbP7p4w8//KbZLJebJ8gVV90UrjU+eME4U37zww8//Kk5Lv/+D78pFse//+EHrObv/jgusmSfbcfeIwkio7lR2B0pyWlVOe7s+fm5x3HVd93u2VkX/8F/6f9fL93kku6ubJ9y1F3Pwlp1n3+E2v549nyW57h+jeDXe2CFoml8EcbIO+L4v0LqVxz3XK7d9p667XKtx90dmdROS5nKodS/zk75ikeccY+V8vXt820La3sPtdUS/h17yDCTgxbTt9qX/Zti+d1trXJdq3UfizWud9E68fljxmqah6rIThmf+ITKTZ87r3f755Xz88pZf1zmHvPnlpvkDiNOFqYAwDuOz348L9+TVl+/fvd81c2Xx1y5WCpece2TbOD48sPNzc0LGG/wlNMwXnPP45sm1HH82O883dSK1Zqeh57/v/TIQ8bJAEbhC/yfOnegz5f18h257eAP+mNFr+q1Ltzt8vYUlGN4veeHIMIpqKonQWxdwJt/PidcvXyJN6g/tUhpPH6A2jaubH7D6OjMBn38M9c7v26178/v2lfcNdLKa/h/9+yag9L1Pbyzo6txdXZ11T2c9m93r+Cso+9cbHPvK7Vajas9d2oX57VKBf7iKldP5XvoY7Un7tdCgYJkpzOW8/FL/v7+y8WX9/df7t/nv1xw+S9fvtzcf/nw/ss9Ld03ekeDvDonpPYCRlCd86MxjnvvH+/u379/f/f+/gH+AfnCcV/y7+/z91/yHEDJf/kYRRkksrOFwhfMe4b5z0aj1KASZ0Qvq91jK8IwVr4FRkJ675KqlVCSPymKfK4Q+UMS5wCELzexfOj3H5+oJMfyJ7Dob4kxoU2lizAsvUhTqVzasDImV/hVkqpPjZylSCbXPj9SKl3U1W7lkHQRY7dy7K3bCcEvPSUvLAltSr8qpNjcagdj4yyuwl0ynnbRvj5WzhAjd1gQ41nrWLlNobkrR9JtbGMMk3PMXTKMpYtLRpgjuczHR6vPV8dKDzE+QaG9LbeR9CnGo99e+wIrVqXtUoprSyFeVi8TjGEoyLojYmyUHlsfSnhi9eK2Vq50OLxHo/F0Vbps5OGN68cJs6u9zIqi0p3R/njkjXW9xuVLl9Xb+xJtGa7XOr/uUoily9Jz/rIUYQxzOlqE8bILfKPGQYNXe4xjFj/ALbpckZxfdN+dkL4PMbYAzTX1uOBoN0vXvdNsTplrPHHXwBafSvnLPKtZ8a6Rh6MV+LHfiDBSVm5EGN/dkWoRqkRAAyIaPeYaXSASpNIhOETRRO2ivGWMJXrrIpaQ75M6aiBl8DqWzhP/qF+3w5kcULoO733evtYTu3oOV7TpYytQuqKlMij1FeVXTdRvGjqNWQkwkk6F1DnSTcZO6tXSBXmqkSJHnt5FGOnouphgvKAY31U78ft6qEYYS3CrD9wFkAM8/gilC5qwOKMlrEmHlrAmbVoaRxiBm8NleEoRSxd4Sj0PJTglxNikV7TpKVjClFadlqhbpiVqP/NYhTvAWIowVu/j2naq7wgoRvGC9KohRkoC/F2MF7fxVf2LDYygupcXeJwOClOM1FFRZN13WEIyRK0enB9i7OMpF/jievhD9QxPRqPReIowltEXVG9JOMPlXZeijZJbOpZKFAuav9KHNMaLflzb24tdjBhdhdHj6zFWj8VIa5i/hLN1aqAvq3o0yYN7HUaSYKweiZESndF3wohn1xnGi3qUpOP0duUbY8S0VfA/AaP0T42RDQD9k2Nc/gvjvzD+f4TxDW1O9SX/mMZ4+R1tTuI7Hkm1Tso90tjGqJPaM7mkXA6EYaSxDMVISxRjnCq9paUEIxeeXWcRO8XIJMGIwjCiMIwoDCMKw4glxHiJGPVtjA3SKwNvTfkOxBhzgMZNt3TWfbrpXF4+nPXCvPtN6aHzrtPp3T0jxmoZGT/eLV/B2mDp6RprgxgxvaZTjM+3WEowFolOr9O5JpSaHPKcMpSKKZ4Dx26fKca6TtpnFONYJ9eUpXJNnZxTosyV4Y03EONVv3vVrl71Gx+i8PTqqVFqPXSubhuth0baP8ZcDmJEiDYvMH5MMiSXoJv0aDXPVeoX5Xq9zBWLRb1RqdfHWKr3z7HUrBfrvat6HZBBqdOu1+vVmt5uFYvnt/AG4M9yqV4sXjSh1KzCZSW4VR1+uYXLW229VtXr+lVHx/uTut7qQakJ1+nnfSjVuaKuV0oES01dL19g/HiBtby8gNgqjpGhA4VHL0tpLhdz8hL8/tzuXFTzDe7sujwuNsutPseOYvxZeuj3nvr9p17/7u6x9/T42IfSw+NT//ER/olLj3f3j3045Q5KVLEuHp7gr7vH/nvuHo/f3fV/y72H0sPDXf8e3+ZFFUoP8Ofjw/t7+IeVfvuApYe7h/fv4Z/7+wdMNt5HJYjoucduj7sAiB/alXK5XLvqQy3x6BNXjWNkysnj2KrEuqHe5Z6SGe3lGxrwEL3X4M4rNLVUOS/Wz1mpMiZRqUnYz5VKOS41+zQMjP6skUpYqpBaWKJhpd5vxn+Wo0wSGVcwMwz/kGJU0qNSrcI1HrGW+jNXqsW1bd5d0LrXu9VSOraKY+RGnp2oQ9cY3z6WGpdPEKA2S+woGIBzMAqtVpsDdeG4Z1oqgzXotFpXFxB9g6GgMzauIcY7a11d5bnrfpFZpafWVeseYsIu9wilR7Aot9yHVqv1xGLCYv+aa1y1Wj0IfK85rt1qnYGFqtDHgSHTy1EJ1Bcf3KF1CTPaaCPOn/t3vQ6E3HUuHLJoNNIxcpzrePchfBs3GLFiTrYB9yf3EXKu+b4CWvhQaUCIfN7rP95X3ulgcs4eH2/OS3XSbXXu7vLn92Nye/V8D6X+mL5q0rpt3zzkW2cVct5pXZ5dtjrXpHJ2nb/Pt5/pkFjxbvx4/uX+5rb9TMY35zc3N89XXahv5eHDTafVh2dX+jc33WuoCnfeu7k5O3/XxKpR6en6DVdtlBpVtO7RlNG7d+lcR/iJdQpjPpneDlclGMvNfHPcHDfgxTUfavVa8QK0pPlU0Wv1BpTG3Ra51i/BzI47OL3x/pzcUYzFdoe0yFOrSIpXZ9T+Fkm99QTHOm3aGMUHcv5Bvybt5yYh16X6NbnqQKlSLdb06x6UatVmrV7po1XPl5vN2odyGmMxrm1tFyOb4RkOW70CY61DmmWCKZtmDzoJuUI8j1i6RrfxDpqMVKjbwFK5Qx5Yx77A2Y5jdGM3eKCIFemPcQbkBQkxdspwBaEOpIKld6BzLbhbkb6n6zaWKNpnUm7C2eVXYgxzj2z48TUYK21SLpNrQFa7RWSYa2p2sQR/k3EvREbq77EEfzOMOsWIB0k+fAAh7+sbGHtjRAYHQ7Q4fnRbQ2TdJs19QQkzY/BwwNiuvLYdwxwymx9wCkZsveZZhLGYhZGkMNIllF+DsRhhPEOM16diDMcCGCn/J8UYjukwovNPijGchcRIwD8pxuj7+mybg9/wfYgxNmu/GIy1FEZyCCMfnkUnXm1jvCyVPn3K/+8g+NXMcVar1fSnn6zJ70mzyTC2Sb0W2dV6hZQR41mM8bdYKsYYq4hR38KoI8ZqjLGIyH7LMMIDzhBjmVTqkV2t1SOMUIV//+P0r39dOc58YAf/MfIvGp8apct9GOMZjHRm/RbGT3/+z7/8VdNEazUfeEEQjEamb46m/9bvn90Bxyx/6D7dnT1CtZo3z92n5zMgtcXL587jc/cZxx1uodTpRhgbt893z527DYx3HTh224gwdjvPj51biF8J3KHfub2EK9tnz0/d2xvA2OpB6fkOWdvZVafz7xZWKQg8ezZ3HGutaT/97i+//vJpF2P8vTI1rIVfl2Iu5w9+0qyhHbjbM6SW0/G4hV8Tl7n2eHzNIUbutjk+xwl+Ra7THFeqlAN0y+NKvkvuGHts9Grj2gNiZFXAf+/u4dgTw1gHjKXzcfkM9e+Zu26WcayMXHGtZrmD03taXLtZfsaxm3OuXS7/cXu2t+t7gymv/fVPxo/hkcfGrxFjvDYqRleFX326rN7c/Pjj/a9+0OTBns0mUCarWq3Wu63Vrm7KUOp2arXWJRTKnW6tds5h6baHQQGW2v3y/XkNhYNAodyCS8p5+nceSjfX8A89Ec6/bz61cRwYTiyf3bJSudzp4PzD/HW5/NzF0n2rXG4/NctNZ//yjv7S0bTf/Mfj3/72t8fS5SdsyOQ7Fo024323+3/+8pO62rOVSiie/LHX6531np56ZzghotfDf1iJBpYgTxBi9lmpd9G4wUL454c4lMWY8cNT/Ev/psH14j+ftkpPu6WP2Zt44HZFP/3n3VP/poQNmSzFBUan8Otqxxiq0cY/+69fm8dNQu5x6Zl2ZRxZjUbR27XUL9fc0/alB2UxOvQltB5MpZXRqQLG1KRpYHOI0XxhhU9+RHa+0zoovdQ83AcI5pk8UoE4P/6tdSRGObVAw14xJibFmPp2bqSwdkZFX54AAA18SURBVDx8Ia5stT54xrbE7Ti+au2ZEdG6CsPcYzGuUyv77JcJa8eUThsUY7d4EAFd2arQLI7HxVdK/Ylr12mpvDOvg0mZndfm+vXX3hRkjPMYrINf0mg6xZj+unwifPx0WeJ+OvB1ik+77/CFyTab0ri8wJnM795d3uyXS/ititm/xss3Swn2KWN9YPK+8RN3kf/0cWOVMlv9+AncHl2ZL+vN0FuujvlGt47Tc/XbjDaM5+nomDbet+5D1ryVEV1yyhT3XBIKWJZz7tNHPv1lmC9+/HRx1XSyv08dsu8BZn+KpjSNyi9KjePOy+U9GDe7ZblZwTzKq2UcfvU+y97bYumMWxefPm5+5al+/PLn/+L+nvnV3yhs9eV/U2X5rz98noh/f1GnvnwBXW1sSPgtUvhtAC3DiUA1X5L/u5Y+s4dz/x02RcHMqu7s79xF6dPHzZZ2ePyYQ850HtFa7iMFz1ML+PG5VPieonrEsFVazcha+nxWdYcyhbPZ0GxgJ3OtmFEEHmlfuLdd9HnBdxIKzFjhUiSxCi6yrEPyvVJaWAIya4EjJ/IzhpiTwgVyU7tyfReMDNgopybrygUZTtJgw43SFpr05g27MomPS+uoz6Y2rDpJeOkoRYiBOZoSkVA/g1qy17+zUBBL6mR9ohotw5Le7cn9mnYUFGE+8qWXT9zFSEx5GJaXGZaV9bxd4k6VNetTY4Mur24OP6eci/2KGqa2NdzYwluV4WV60WIF26fulfTHbPZnumSpmfVFLVtce9d/0hnXfJbLWVmfP3/e3KrYeqlWAi9G58iKZE1y8U6y+G2trbGljgVelRRRFF663QZn0Wfy54KYuWoV7Xh7lkKiOpy5ROt8pBubPdiwhodqJUuiPPDD8SJlaBLXIG64ljh+CTuNVme05vbS9I34o6+s+w239kAyTGOUxcvp6Eb0NX1aaOZK2z1Oxd757DGYR0sN7BOVbZHL7BIuOTzR1lAj2gPx4YuoSWMLcOhuiHE+2OleXtZH/JnNRTtq1urXwc5SK7aXLCm/C9EjI1yqwIi+/cbV7XBF/zmfw11U4uXPkwe+oKvqzNt5zbMMC0lXUNm/ozJWWcnwquaO6tve8oDRUTUFl8OmGLGpcGcYuk6GShd2SzYqKRB/tLTnQ0vOvlmO3mS502pOVmVpa+119Ti2k7U3uLvT8vbsBaIjxhhRyWxRwv0DpgJq6lLDTbroJ7cz8x/r9Vrcs+n8FsZgt7tkbZiM3zpmLL6GCwBlrcum73TU5eQFBxljZAkHw3aI4ai0mwypHs/YbmSG4Zr25CU+oPiLHc3MYmXYtbPYjMNnfxm/g3G0Hh12kDHGXLTMtj/RGGBr5GCFoZPGyzUGL4CUTG3H5mSlLRZCLjO6wL4qZPxmbRsjX5serlWCMad5IZQl2/BKVni6x5qVqsoL9FcY7iwNbmQtCgx8Insd8SGf0VUNd7Ld9q41OWwmUu049Em4x6pHdzkTQtPuSYI1GQ6Y6ZgfdB6CtbNXRhZbNZS9i5JFV2mbCyTp7sibDyeyponitg0zLPcwKadegdocmy57M6V1pMvzoytGHgZWSxBkXsxRZnZQW9f+jiaZmqZai9XA2xqzAI3YqW1Khnzsk91gYEmiIvFsD4hddyMl+wocxogqVYAuggvhkimyRTQK6KUiy0zj1oMYoTPK2xqGvkuQZYhfRMmaJ5u7L6WDy6a4GrUJRjC3NGXDnu86FU0npnhAXSOMtM/FG5tMMDDCpYsQY8wisFEPuFtcppAo2xVIbZkJrFcSpSHbP2qmHl7V35Gm+nIqKjv+atep4Brt7gGbTxebwKUhMSOBIQZidDUa2oDHRz+Z7C9npHa32REalRs7YcQO+wOOzAMvWEmH8/2uJijSvocJO9ex/rGxQ3tKFM3CTrLQJNof/bUkoa5OGDgftCS1+QLuhJPpPGSWWjF2dpUY7nsyD9TipWVTBhkkdNdxhovQGMN9KBPThVuxOQZuqmaQUY5uNejh3s+GMQ11TRan2b1REKfM1vg7pnKSwY0yA8RI9CwLvuM4Y7aYbPeXOtuaWFahYMH/8KniYuDZTiHc+UjKOZ49pX1ZlhQN1wi393tHWVtEL8vcqXkhA+PLC1EvM17ozpWDhFv58SI2CchIwsryqirHp0BczPaNlYe4KYdry/vsjSCJq0TrdiIfPaOir1n9JsO170Rddtqb4EbP6ku8eg+MhT2fJvmB9C+8WLDTr3Un7Mhwz69aa9vff+3O6onLraQ6bjl/NExB5YXdawRVzA22DIe97aAzevDr9p0b7HVU0jYl3pNp8G26bfeROLfw8ZJWmO1axvn28/cb4hcNTih7O/MOCdgNm1GMwClou+71tfgULecEe23GzoiZt78pXrlOv7lPW/ntPu9mEiakgbj/+BFABSQqijUIMkdAp9tNu9fLvX5huH3aup3o852DI+uGvxxMBQ33gpQPYQVKriqiJkwHS/9gE0zmW/CdPbaRP2Ih6j0JpM08l+5o/N7VsTdFNwN7MCwAyRKB3m+KAsckPjcc2CPzFQpWULeWKF7sqeNrNRVlXxojzRcDlc/OU+4Rw3X90XLpJbIMRr57zNZ0UCMVd7KKZY+qHrfD1nIXZDKdR1/RHRGO3C3gK4Wuzaw5mwc25XX7dyUy3KFnyYiYym8e+B4SZk1UITKvxk4rHL3Ypr7TJcNMlzsUNw7Y36c1o94jiCv2wJ38j7A93Pj6m8bCY8LQd5IoI2Q+hbfdgy1DEki8SCnQbLs/nrLd3U4mg5csVUypcDi+NxfVo/a3OkriG6cT1rwoT/htiOJJa6bbO2RpU33DFM+cF33P+TYaO4v319zKhOz4jVM3ul4dThKH7M7hNUwHmG8CakvkOIm4n7klTXv0NluRLA6mPMNJhY6My7Zqmuu+pcqaeC/oLkrY2w8MkuVw37sjt5NKycHRpPAzHwd3EdI13iHGerqfTx8rxpLNox1AbBEmZw5mmIWdvOQxDzvENcNE/lSWg+FExj3oLV6ZO9nTmF8nrm86LLFieGQqhBxy11+nIJ64tm/0wANRL01juaYlyESfWZZJaS5uTXv0ptqJ+B4ucRzO27Bdz1FzEnUVe9hpLPtGxY8CqWTenL3h0UKLx1bCjTD+gWX92JXaDYPMCmsJ9CEI+6A1c8lM0WgC8MAw89ebO3c7G5WIyjq6P4ng8Aw29SmDz9R9vs4WuPZsZv3DoFuzy1YYIJl0xZQwbsw2DF/bihSCmAUyHsccmRsYaa3XjD56i9ky+nmP0MkihkPz0XRoy5QEIXJKeJvw0uzx3LdxWj6f8RJ30h8pjFNTYYNHo7WCXdVeOQNmjILADKP9oaUh2/XFjak3mppTcDl0Y+0kQX2WexTeohVRXGE/yK2dT/2lGGfTl0sy4ZndHfJ0Ymi01QLRB2uRnhZoAsakrrhRTy+YiTleHpnT1H7eWd0x2Qn6q8Ww9lvurcmT5pyPBpc02/ckpsuGhGQl9c1BILG0y2JCMU43EgruCtPYIr/5oclov6oKwhuyDraB1p5nbPvCgG0JPx8ZwUwN84CeAu8ilfG2cfgYm3oqiAa8AiE9zIBt7+3Ma9/fjLz1tix5tT+buXcUzJx9xv/N1HDO3gRYQioXM3BXsuIRC9gDhNmGEm2zYc5xXp5n6Ds1d/a+YWl6OoHbL7O96XNp31ZX+miGLWEoYb7S1QQKY+QMZjjXynW1nOB5DCPoajh2LS3Nob0vOTfb+37FEyONQxJo+xRGyZhmD0o40ETc+GXpE5sOk5ORN0PavnKBfSJq0FUcPLVEbWnoo2mQsd/S/jGtN987nIqf22d5Du2t5y/nI/cfn/3N8RhwDIaIs+YcPnQvM2fgZRpIZx9E+RvsHU5Fn+5TGr5w2H4Hq+nGK9elEbC2NQQXsjV1XmJ8xmKfZ5Qm3y6LZO/TV7qJ6asF96NYYhJDf43d9/bOqtBO2/DulWLy+/SV7vH5DcTfO6VCzv7C821EX+3rHoK4M+Ty9eI6+63c9NtnO3GTyT0vV1u9LUp3Lu5TGeHb2NNtMYZ7jbmsZX42c7zsm0dBG3HxvZLzgbqf2onAUt7g9vpysn8CF3/sbsVfJYP9U48ESVsFX8mwRo62PywXtG+Uxc0Sf5EROsuKujo5O2cEjqrsj3EEGoZ+ZxlZmbO/FG1im8fiNEx7omUAxHlL31NNE/GkzOS1oIrSYpY9ur8lbjCbSGJ2DlAVv8vA0V6x+QMpelmVRG3i2IGf3aSGH9jzhSZKh2b2qNLs+3bELbHV7LwdbVCc0qAIwExnNg6Qj0zTHI3okinO1BLgNzUrXRTeQFJ+XoQonpWZuEvVVJBVVZKUSCRJ3TvDauc6RbDfOhI+SUbTvZTk64UXD6908F3Fn0vZ+fQTBXzt0Py5gW1KMD1gF48HyL8RZ3pjce2T5nfuBShsT3v85YhrT8S909FfL/KeeZ2/NHGXQ1FUT8OJ8x6n9i8cYCimveChPY/SW1lVpMlg9ItwFK8U3fcci/KXFz/Nxi9tNGV4PMP9ZYgfzKYWj3MeVZ6XhRRe/M4KSYEo5RZzz/ye09K+hehASj174AwnFs7y1DSEXJgM5zMvMI+Z+vgv+Z8t/w8A8fZckMWDVgAAAABJRU5ErkJggg==',
                        users: [
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Вострухин Игорь Владимирович',
                                surName: 'Вострухин',
                                middleName: 'Владимирович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация в квадрате',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная ',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Чекашкин Владислав Александрович',
                                surName: 'Чекашкин',
                                middleName: 'Александрович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Федотов Александр Михайлович',
                                surName: 'Федотов',
                                middleName: 'Михайлович',
                                project: [],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Николаев Антон Дмитриевич',
                                surName: '',
                                middleName: '',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Игорь Вострухин Владимирович',
                                surName: 'Вострухин',
                                middleName: 'Владимирович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Игорь Вострухин Владимирович',
                                surName: 'Вострухин',
                                middleName: ' ',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Игорь Вострухин',
                                surName: 'Вострухин',
                                middleName: 'Владимирович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: 'ФИЦ «Фундаментальные основы биотехнологии» РАН',
                        img: 'https://hh.ru/employer-logo/1859803.png',
                        users: [
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Игорь',
                                surName: 'Вострухин',
                                middleName: 'Владимирович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Игорь',
                                surName: 'Вострухин',
                                middleName: 'Владимирович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                            {
                                img:
                                    'https://3.bp.blogspot.com/-A-ZzhagtkQo/Wjvze8A25MI/AAAAAAAAEWg/to-vkCC957w5Zc63APBCPDe1L24W23d9gCLcBGAs/s1600/3748675-mark-wahlberg-a-la-projection-du-film-h-950x0-2.jpg',
                                name: 'Игорь',
                                surName: 'Вострухин',
                                middleName: 'Владимирович',
                                project: [
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                    {
                                        img: 'https://orchidea-shop.ru/base/load/D0BFD0B0D0BFD0BED180D182D0BED0BDD0B8D0BA20D183D185D0BED0B4jpg',
                                        titleProject: 'Отдаленная гибридизация',
                                    },
                                ],
                            },
                        ],
                    },
                ],
                loadSuccess: false,
            };
        },

        async mounted() {
            await this.getModulesTest('RESEARCH_MEMBERS', `${this.pageId}`);
            setTimeout(() => {
                this.loadSuccess = true;
            }, 1000);
        },
    };
</script>

<style scoped></style>
