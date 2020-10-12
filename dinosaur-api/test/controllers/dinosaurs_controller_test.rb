require 'test_helper'

class DinosaursControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dinosaur = dinosaurs(:one)
  end

  test "should get index" do
    get dinosaurs_url, as: :json
    assert_response :success
  end

  test "should create dinosaur" do
    assert_difference('Dinosaur.count') do
      post dinosaurs_url, params: { dinosaur: { description: @dinosaur.description, discovery_person: @dinosaur.discovery_person, discovery_year: @dinosaur.discovery_year, distribution: @dinosaur.distribution, end_stage: @dinosaur.end_stage, genus: @dinosaur.genus, grouping: @dinosaur.grouping, meaning: @dinosaur.meaning, period: @dinosaur.period, size: @dinosaur.size, start_stage: @dinosaur.start_stage, type_species: @dinosaur.type_species } }, as: :json
    end

    assert_response 201
  end

  test "should show dinosaur" do
    get dinosaur_url(@dinosaur), as: :json
    assert_response :success
  end

  test "should update dinosaur" do
    patch dinosaur_url(@dinosaur), params: { dinosaur: { description: @dinosaur.description, discovery_person: @dinosaur.discovery_person, discovery_year: @dinosaur.discovery_year, distribution: @dinosaur.distribution, end_stage: @dinosaur.end_stage, genus: @dinosaur.genus, grouping: @dinosaur.grouping, meaning: @dinosaur.meaning, period: @dinosaur.period, size: @dinosaur.size, start_stage: @dinosaur.start_stage, type_species: @dinosaur.type_species } }, as: :json
    assert_response 200
  end

  test "should destroy dinosaur" do
    assert_difference('Dinosaur.count', -1) do
      delete dinosaur_url(@dinosaur), as: :json
    end

    assert_response 204
  end
end
