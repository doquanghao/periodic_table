import 'dart:ui';

class ElementData {
  final String name,
      category,
      symbol,
      extract,
      source,
      atomicWeight,
      status,
      color,
      meltingPoint,
      meltingTemperature,
      otherProperties,
      no_1,
      no_2,
      no_3,
      no_4,
      no_5,bohrModel3d;
  final int number;
  final String colors;

  ElementData.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        category = json['category'],
        symbol = json['symbol'],
        extract = json['extract'],
        source = json['source'],
        atomicWeight = json['atomic_weight'],
        number = json['number'],
        colors = json['colors'],
        status = json['status'],
        color = json['color'],
        meltingPoint = json['melting_point'],
        meltingTemperature = json['melting_temperature'],
        otherProperties = json['other_properties'],
        no_1 = json['no_1'],
        no_2 = json['no_2'],
        no_3 = json['no_3'],
        no_4 = json['no_4'],
        no_5 = json['no_5'],
        bohrModel3d = json['bohr_model_3d'];
}
