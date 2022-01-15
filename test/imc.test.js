const { imc, interpretIMC } = require('../imc');
test('Overweight Tests ', () => {
    expect(interpretIMC(25)).toBe("Overweight");
    expect(interpretIMC(26)).toBe("Overweight");
    expect(interpretIMC(27)).toBe("Overweight");
    expect(interpretIMC(28)).toBe("Overweight");
    expect(interpretIMC(29.9)).toBe("Overweight");
}
)


test('Healthy Tests ', () => {
    expect(interpretIMC(19)).toBe("Healthy");
    expect(interpretIMC(20)).toBe("Healthy");
    expect(interpretIMC(21)).toBe("Healthy");
    expect(interpretIMC(22)).toBe("Healthy");
    expect(interpretIMC(24)).toBe("Healthy");
}
)
test('underweight Tests ', () => {
    expect(interpretIMC(17)).toBe("underweight");
    expect(interpretIMC(10)).toBe("underweight");
    expect(interpretIMC(15)).toBe("underweight");
    expect(interpretIMC(18)).toBe("underweight");
}
)

test('Obese Tests ', () => {
    expect(interpretIMC(40)).toBe("Obese");
    expect(interpretIMC(35)).toBe("Obese");
    expect(interpretIMC(30)).toBe("Obese");
    expect(interpretIMC(50)).toBe("Obese");
}
)
